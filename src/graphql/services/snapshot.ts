import { createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const postStatuses = ['draft', 'published', 'pending_review'] as const

export interface Proposals {
  id: string
  title: string
  body: string
  state: string
  author: string
}

export interface GetProposalsResponse {
  proposals: Proposals[]
}

export const proposalsApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://hub.snapshot.org/graphql',
  }),
  endpoints: (builder) => ({
    getProposals: builder.query<GetProposalsResponse, { spacein: string[]; skipNumber: number; status?: string }>({
      query: ({ spacein, skipNumber, status }) => ({
        document: gql`
          query Proposals($spacein: [String!], $skipNumber: Int! = 0, $status: String = "all") {
            proposals(
              first: 10
              skip: $skipNumber
              where: { space_in: $spacein, state: $status }
              orderBy: "created"
              orderDirection: desc
            ) {
              id
              title
              body
              choices
              start
              end
              snapshot
              state
              author
              space {
                id
                name
              }
            }
          }
        `,
        variables: {
          spacein,
          skipNumber,
          status,
        },
      }),
    }),
  }),
})

export const { useGetProposalsQuery } = proposalsApi

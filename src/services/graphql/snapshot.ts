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
  scores: number[]
  choices: string[]
}

export interface GetProposalsResponse {
  proposals: Proposals[]
}

export const proposalsApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://hub.snapshot.org/graphql',
  }),
  endpoints: (builder) => ({
    getProposals: builder.query<
      GetProposalsResponse,
      { spacein: string[]; skipNumber: number; title?: string; status?: string }
    >({
      query: ({ spacein, skipNumber, title, status }) => ({
        document: gql`
          query Proposals($spacein: [String!], $skipNumber: Int! = 0, $title: String, $status: String = "all") {
            proposals(
              first: 10
              skip: $skipNumber
              where: { space_in: $spacein, state: $status, title_contains: $title }
              orderBy: "created"
              orderDirection: desc
            ) {
              id
              title
              body
              choices
              scores
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
          title,
          status,
        },
      }),
    }),
  }),
})

export const { useGetProposalsQuery } = proposalsApi

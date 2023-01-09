// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface HotWordsResponse {
  code: number
  data: {
    id: string
    name: string
    timeType: number
  }[]
  message: string
}

interface SuggestionResponse {
  code: number
  data: Array<{
    type: 'query' | 'tag' | 'account'
    list: Array<{ icon?: string; name?: string; value: string; isCertificated?: boolean }>
  }>
  message: string
}

// Define a service using a base URL and expected endpoints
export const dataYesApi = createApi({
  reducerPath: 'dataYesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gw.datayes-stg.com/block_chain_twitter_qa/whitelist/web/search' }),
  endpoints: (builder) => ({
    getHotWords: builder.query<HotWordsResponse, { size?: number }>({
      query: ({ size }) => `/hotWords?size=${size ?? 4}`,
    }),
    getSuggestion: builder.query<SuggestionResponse, { key?: string }>({
      query: ({ key }) => `/suggestion?key=${key}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHotWordsQuery, useGetSuggestionQuery } = dataYesApi

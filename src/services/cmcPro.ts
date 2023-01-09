// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface CmcProResponse {
  data: any
  status: {
    redit_count: number
    elapsed: number
    error_code: number
    error_message: string
    notice: string
    timestamp: string
  }
}
// Define a service using a base URL and expected endpoints
export const cmcProApi = createApi({
  reducerPath: 'cmcProApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cmc-api.web3service.io/' }),
  endpoints: (builder) => ({
    getQuotes: builder.query<CmcProResponse, string>({
      query: (symbol) => ({
        url: `/v2/cryptocurrency/quotes/latest?symbol=${symbol}`,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuotesQuery } = cmcProApi

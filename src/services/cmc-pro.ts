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
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pro-api.coinmarketcap.com' }),
  endpoints: (builder) => ({
    getQuotes: builder.query<CmcProResponse, string>({
      query: (symbol) => ({
        url: `/v2/cryptocurrency/quotes/latest?symbol=${symbol}`,
        headers: { 'X-CMC_PRO_API_KEY': '94e1537f-81cf-46a5-9406-6586cfb33471' },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuotesQuery } = cmcProApi

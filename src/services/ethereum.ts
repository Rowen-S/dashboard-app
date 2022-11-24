// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface EthereumResponse {
  message: string
  result: any
  status: string
}
// Define a service using a base URL and expected endpoints
export const ethereumApi = createApi({
  reducerPath: 'ethereumApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.etherscan.io/' }),
  endpoints: (builder) => ({
    getEthereumStats: builder.query<EthereumResponse, string>({
      query: (action) => `api?module=stats&apikey=G59CCP62JA1RRCSR9V22Q9FKMN5IWHEX6H&action=${action}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEthereumStatsQuery } = ethereumApi

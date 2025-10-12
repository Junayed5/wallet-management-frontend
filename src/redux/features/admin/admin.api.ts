import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallet/all-wallets",
        method: "GET",
      }),
      providesTags: ["Action"]
    }),
    getAllTransactions: builder.query({
      query: (params) => ({
        url: "/transactions/all",
        method: "GET",
        params: params
      }),
      providesTags: ["Action"]
    }),
    blockUser: builder.mutation({
      query: (number) => ({
        url: `/wallet/block/${number}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Action"],
    }),
    activeUser: builder.mutation({
      query: (number) => ({
        url: `/wallet/active/${number}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Action"],
    }),
    blockAgent: builder.mutation({
      query: (number) => ({
        url: `/agent/block/${number}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Action"],
    }),
    activeAgent: builder.mutation({
      query: (number) => ({
        url: `/agent/active/${number}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Action"],
    }),
  }),
});

export const {
  useGetAllWalletsQuery,
  useGetAllTransactionsQuery,
  useBlockUserMutation,
  useActiveUserMutation,
  useActiveAgentMutation,
  useBlockAgentMutation
} = adminApi;

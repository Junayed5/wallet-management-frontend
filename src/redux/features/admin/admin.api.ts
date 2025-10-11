import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallet/all-wallets",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllWalletsQuery } = adminApi;

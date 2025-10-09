import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/wallet/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    walletLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallet/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useWalletLoginMutation, useGetMyWalletQuery } = authApi;

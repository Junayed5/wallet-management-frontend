import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
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
      invalidatesTags: ["User"]
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"]
    }),
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallet/me",
        method: "GET",
      }),
      providesTags: ["User", "Transaction"]
    }),
  }),
});

export const { useRegisterMutation, useWalletLoginMutation, useGetMyWalletQuery, useLogoutMutation } = authApi;

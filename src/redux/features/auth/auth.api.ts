import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWallet: builder.mutation({
      query: (walletInfo) => ({
        url: "/wallet/register",
        method: "POST",
        body: walletInfo,
      }),
    }),
  }),
});

export const { useCreateWalletMutation } = authApi;

import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    agentTransaction: builder.query({
      query: (userNumber) => ({
        url: `/transactions/user/${userNumber}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAgentTransactionQuery } = agentApi;

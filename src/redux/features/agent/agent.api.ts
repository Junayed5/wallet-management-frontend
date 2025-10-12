import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    agentTransaction: builder.query({
      query: (userNumber) => ({
        url: `/transactions/agent/${userNumber}`,
        method: "GET",
      }),
    }),
    cashIn: builder.mutation({
      query: (receiveInfo) => ({
        url: "/agent/cash-in",
        method: "POST",
        data: receiveInfo
      }),
    }),
    cashOut: builder.mutation({
      query: (receiveInfo) => ({
        url: "/agent/cash-out",
        method: "POST",
        data: receiveInfo
      }),
    }),
  }),
});

export const { useAgentTransactionQuery, useCashInMutation, useCashOutMutation } = agentApi;

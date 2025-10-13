import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    agentTransaction: builder.query({
      query: ({userNumber,params}) => ({
        url: `/transactions/agent/${userNumber}`,
        method: "GET",
        params: params
      }),
      providesTags: ["Transaction"]
    }),
    cashIn: builder.mutation({
      query: (receiveInfo) => ({
        url: "/agent/cash-in",
        method: "POST",
        data: receiveInfo
      }),
      invalidatesTags: ["Transaction"]
    }),
    cashOut: builder.mutation({
      query: (receiveInfo) => ({
        url: "/agent/cash-out",
        method: "POST",
        data: receiveInfo
      }),
      invalidatesTags: ["Transaction"]
    }),
  }),
});

export const { useAgentTransactionQuery, useCashInMutation, useCashOutMutation } = agentApi;

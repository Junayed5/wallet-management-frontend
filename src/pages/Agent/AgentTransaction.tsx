import TransactionTable from "@/components/TansactionTable";
import { useAgentTransactionQuery } from "@/redux/features/agent/agent.api";
import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";

const AgentTransaction = () => {
  const { data } = useGetMyWalletQuery(undefined);
  const { data: transactionData } = useAgentTransactionQuery(
    data?.wallet?.phone || "",
    {}
  );

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <h1 className="text-2xl font-semibold text-primary">  Transactions</h1>
      </div>

      <TransactionTable data={transactionData} />
    </div>
  );
};

export default AgentTransaction;

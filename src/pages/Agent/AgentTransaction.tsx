import PaginationSection from "@/components/Pagination";
import TransactionTable from "@/components/TansactionTable";
import { useAgentTransactionQuery } from "@/redux/features/agent/agent.api";
import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";
import { useState } from "react";
import { toast } from "sonner";

const AgentTransaction = () => {
  const { data } = useGetMyWalletQuery(undefined);
  const [page, setCurrentPage] = useState(1);
  const { data: transactionData, isLoading } = useAgentTransactionQuery({
    userNumber: data?.wallet?.phone,
    params: { page },
  });

  if (isLoading) {
    toast.loading("Loading transactions...", { id: "load-transaction" });
  } else {
    toast.success("Transactions loaded", { id: "load-transaction" });
  }

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <h1 className="text-2xl font-semibold text-primary"> Transactions</h1>
      </div>

      <div className="my-4">
        <TransactionTable data={transactionData} />
      </div>
      <PaginationSection
        currentPage={transactionData?.pagination?.page}
        setCurrentPage={setCurrentPage}
        totalPages={transactionData?.pagination?.totalPages}
      />
    </div>
  );
};

export default AgentTransaction;

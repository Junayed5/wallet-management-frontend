import PaginationSection from "@/components/Pagination";
import TransactionTable from "@/components/TansactionTable";
import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";
import { useUserTransactionQuery } from "@/redux/features/user/user.api";
import { useState } from "react";
import { toast } from "sonner";

const UserTransaction = () => {
  const { data } = useGetMyWalletQuery(undefined);
  const [page, setCurrentPage] = useState(1);

  const { data: userTransactions, isLoading } = useUserTransactionQuery({
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
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">Transactions</h1>
        {/* <FilterDropdown /> */}
      </div>
      <div className="my-4">
        <TransactionTable data={userTransactions} />
      </div>
      <PaginationSection
        currentPage={userTransactions?.pagination?.page}
        setCurrentPage={setCurrentPage}
        totalPages={userTransactions?.pagination?.totalPages}
      />
    </div>
  );
};

export default UserTransaction;

import TransactionTable from "@/components/TansactionTable";
import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";
import { useUserTransactionQuery } from "@/redux/features/user/user.api";

const UserTransaction = () => {
  const { data: user } = useGetMyWalletQuery(undefined);

  const { data: userTransactions } = useUserTransactionQuery(
    user?.wallet?.phone
  );

  return (
    <div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold text-primary">Transactions</h1>
      </div>
      <TransactionTable data={userTransactions} />

      
    </div>
  );
};

export default UserTransaction;

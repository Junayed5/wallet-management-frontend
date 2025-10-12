import FilterDropdown from "@/components/Dropdown";
import PaginationSection from "@/components/Pagination";
import TransactionTable from "@/components/TansactionTable";
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";
import { useState } from "react";

const AllTransactions = () => {
    const [page, setCurrentPage] = useState(1);
    const { data } = useGetAllTransactionsQuery({page});
    return (
        <div className="container mx-auto">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-primary">Transactions</h1>
                <FilterDropdown/>
            </div>
            <div className="my-4">
                <TransactionTable data={data}/>
            </div>
            <PaginationSection currentPage={data?.pagination?.page} setCurrentPage={setCurrentPage} totalPages={data?.pagination?.totalPages}/>
        </div>
    );
};

export default AllTransactions;
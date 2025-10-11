import FilterDropdown from "@/components/Dropdown";
import PaginationSection from "@/components/Pagination";
import TransactionTable from "@/components/TansactionTable";

const AllTransactions = () => {
    return (
        <div className="container mx-auto">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-primary">Transactions</h1>
                <FilterDropdown/>
            </div>
            <TransactionTable/>
            <PaginationSection currentPage={1} totalPages={10}/>
        </div>
    );
};

export default AllTransactions;
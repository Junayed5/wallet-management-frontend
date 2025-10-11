import { useGetAllWalletsQuery } from "@/redux/features/admin/admin.api";

    
const AllWallets = () => {

    const { data, isLoading } = useGetAllWalletsQuery(undefined);
    console.log(data, isLoading);
    return (
        <div>
            <h1>All Wallets</h1>
        </div>
    );
};

export default AllWallets;
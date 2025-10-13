import ActionTable from "@/components/ActionTable";
import { role } from "@/constants/role";

const ManageUser = () => {
    return (
        <div className="container mx-auto">
            <h1 className="font-semibold text-2xl text-primary">Manage Users</h1>
            <ActionTable role={role.user}/>
        </div>
    );
};

export default ManageUser;
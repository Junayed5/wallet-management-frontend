import ActionTable from "@/components/ActionTable";
import { role } from "@/constants/role";

const ManageUser = () => {
    return (
        <div>
            <h1>Manage Users</h1>
            <ActionTable role={role.user}/>
        </div>
    );
};

export default ManageUser;
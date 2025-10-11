import ActionTable from "@/components/ActionTable";
import { role } from "@/constants/role";

const ManageAgent = () => {
    return (
        <div>
            <h1>Manage Agents</h1>
            <ActionTable role={role.agent}/>
        </div>
    );
};

export default ManageAgent;
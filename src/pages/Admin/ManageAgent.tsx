import ActionTable from "@/components/ActionTable";
import { role } from "@/constants/role";

const ManageAgent = () => {
    return (
        <div className="container mx-auto">
            <h1 className="font-semibold text-2xl text-primary">Manage Agents</h1>
            <ActionTable role={role.agent}/>
        </div>
    );
};

export default ManageAgent;
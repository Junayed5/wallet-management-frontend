import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useActiveAgentMutation,
  useActiveUserMutation,
  useBlockAgentMutation,
  useBlockUserMutation,
  useGetAllWalletsQuery,
} from "@/redux/features/admin/admin.api";
import type { TWallet } from "@/types";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function ActionTable({ role }: { role?: string }) {
  const { data } = useGetAllWalletsQuery(undefined);
  const [blockUser] = useBlockUserMutation();
  const [activeUser] = useActiveUserMutation();
  const [blockAgent] = useBlockAgentMutation();
  const [activeAgent] = useActiveAgentMutation();

  const handleActive = async (number: string) => {
    if (role === "USER") {
      await activeUser(number);
      toast.success("User Activated Successfully");
    } else if (role === "AGENT") {
      await activeAgent(number);
      toast.success("Agent Activated Successfully");
    }
  };
  const handleBlock = async (number: string) => {
    if (role === "USER") {
      await blockUser(number);
      toast.success("User Blocked Successfully");
    } else if (role === "AGENT") {
      await blockAgent(number);
      toast.success("Agent Blocked Successfully");
    }
  };

  const filter = data?.wallets.filter((item: TWallet) => item.role === role);
  return (
    <div className="container mx-auto">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {filter?.map((item: TWallet) => (
            <TableRow
              key={item._id}
              className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
            >
              <TableCell className="py-2.5 font-medium">{item.name}</TableCell>
              <TableCell className="py-2.5">{item.phone}</TableCell>
              <TableCell className="py-2.5">{item.role}</TableCell>
              <TableCell className="py-2.5">{item.isActive}</TableCell>
              <TableCell className="py-2.5 gap-2 flex">
                <Button
                  onClick={() => handleActive(item.phone)}
                  className="bg-green-500 hover:bg-green-400"
                  size="sm"
                >
                  Active
                </Button>
                <Button
                  onClick={() => handleBlock(item.phone)}
                  className="bg-red-500 hover:bg-red-400"
                  size="sm"
                >
                  Block
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
}

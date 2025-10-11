import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllWalletsQuery } from "@/redux/features/admin/admin.api";
import type { TWallet } from "@/types";

export default function TableComponent() {
  const { data } = useGetAllWalletsQuery(undefined);
  // console.log(data, isLoading);
  return (
    <div>
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {data?.wallets?.map((item:TWallet) => (
            <TableRow
              key={item._id}
              className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
            >
              <TableCell className="py-2.5 font-medium">{item.name}</TableCell>
              <TableCell className="py-2.5">{item.phone}</TableCell>
              <TableCell className="py-2.5">{item.role}</TableCell>
              <TableCell className="py-2.5">{item.isActive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
}

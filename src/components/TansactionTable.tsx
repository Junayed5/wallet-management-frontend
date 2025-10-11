import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api"
import type { TTransaction } from "@/types";

export default function TransactionTable() {

  const { data } = useGetAllTransactionsQuery(undefined);
  // console.log(data)

  return (
    <div>
      <div className="overflow-hidden rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="h-9 py-2">Sender Number</TableHead>
              <TableHead className="h-9 py-2">Receiver Number</TableHead>
              <TableHead className="h-9 py-2">Amount</TableHead>
              <TableHead className="h-9 py-2">Transaction </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.transactions.map((transaction: TTransaction) => (
              <TableRow key={transaction._id}>
                <TableCell className="py-2 font-medium">
                  {transaction.senderNumber}
                </TableCell>
                <TableCell className="py-2">{transaction.receiverNumber}</TableCell>
                <TableCell className="py-2">{transaction.amount}</TableCell>
                <TableCell className="py-2">{transaction.transactionType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

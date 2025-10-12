// import type { IUserSideItems } from "@/types";
import AddMoney from "@/pages/User/AddMoney";
import SendMoney from "@/pages/User/SendMoney";
import WithdrawMoney from "@/pages/User/WithdrawMoney";
import type { IUserSideItem } from "@/types";
import {  Book, Send, SendHorizonalIcon, TicketPlus } from "lucide-react";
import { lazy } from "react";

const UserTransaction = lazy(() => import("@/pages/User/UserTransaction"));

export const userSidebarItems: IUserSideItem[] = [
  {
    name: "Send Money",
    url: "/user/send-money",
    icon: Send,
    component: SendMoney,
  },
  {
    name: "Cash Out",
    url: "/user/cash-out",
    icon: SendHorizonalIcon,
    component: WithdrawMoney,
  },
  {
    name: "Add Money",
    url: "/user/add-money",
    icon: TicketPlus,
    component: AddMoney,
  },
  {
    name: "Transaction History",
    url: "/user/transactions",
    icon: Book,
    component: UserTransaction,
  },
];

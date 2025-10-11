// import type { IUserSideItems } from "@/types";
import type { IUserSideItem } from "@/types";
import { Frame, PieChart, Map, Book } from "lucide-react";
import { lazy } from "react";

const UserTransaction = lazy(() => import("@/pages/User/UserTransaction"));

export const userSidebarItems: IUserSideItem[] = [
  {
    name: "Send Money",
    url: "#",
    icon: Frame,
    component: UserTransaction,
  },
  {
    name: "Withdraw",
    url: "#",
    icon: PieChart,
    component: UserTransaction,
  },
  {
    name: "Add Money",
    url: "#",
    icon: Map,
    component: UserTransaction,
  },
  {
    name: "Transaction History",
    url: "/user/transactions",
    icon: Book,
    component: UserTransaction,
  },
];

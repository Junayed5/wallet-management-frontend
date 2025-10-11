// import type { IUserSideItems } from "@/types";
import type { IUserSideItem } from "@/types";
import { Frame, PieChart, Book } from "lucide-react";
import { lazy } from "react";

const AgentTransaction = lazy(() => import("@/pages/Agent/AgentTransaction"));
const UserTransaction = lazy(() => import("@/pages/User/UserTransaction"));

export const agentSidebarItems: IUserSideItem[] = [
  {
    name: "Cash In",
    url: "#",
    icon: Frame,
    component: UserTransaction,
  },
  {
    name: "Cash Out",
    url: "#",
    icon: PieChart,
    component: UserTransaction,
  },
  {
    name: "Transaction History",
    url: "/agent/transactions",
    icon: Book,
    component: AgentTransaction,
  },
];

// import type { IUserSideItems } from "@/types";
import AgentTransaction from "@/pages/Agent/AgentTransaction";
import UserTransaction from "@/pages/User/UserTransaction";
import type { IUserSideItem } from "@/types";
import { Frame, PieChart, Book } from "lucide-react";

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

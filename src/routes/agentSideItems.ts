// import type { IUserSideItems } from "@/types";
import CashIn from "@/pages/Agent/CashIn";
import CashOut from "@/pages/Agent/CashOut";
import type { IUserSideItem } from "@/types";
import {  BanknoteArrowUp, BanknoteArrowDown, Scroll } from "lucide-react";
import { lazy } from "react";

const AgentTransaction = lazy(() => import("@/pages/Agent/AgentTransaction"));

export const agentSidebarItems: IUserSideItem[] = [
  {
    name: "Cash In",
    url: "/agent/cash-in",
    icon: BanknoteArrowUp,
    component: CashIn,
  },
  {
    name: "Cash Out",
    url: "/agent/cash-out",
    icon: BanknoteArrowDown,
    component: CashOut,
  },
  {
    name: "Transaction History",
    url: "/agent/transactions",
    icon: Scroll,
    component: AgentTransaction,
  },
];

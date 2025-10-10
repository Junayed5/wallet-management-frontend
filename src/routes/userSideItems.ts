// import type { IUserSideItems } from "@/types";
import UserTransaction from "@/pages/User/UserTransaction";
import type { IUserSideItem } from "@/types";
import { Frame, PieChart, Map, Book } from "lucide-react";

export const userSidebarItems: IUserSideItem[]= [
    {
      name: "Send Money",
      url: "#",
      icon: Frame,
        component: UserTransaction
    },
    {
      name: "Withdraw",
      url: "#",
      icon: PieChart,
      component: UserTransaction
    },
    {
      name: "Add Money",
      url: "#",
      icon: Map,
      component: UserTransaction
    },
    {
      name: "Transaction History",
      url: "/user/transactions",
      icon: Book,
      component: UserTransaction
    },
  ]
import AllTransactions from "@/pages/Admin/AllTransactions";
import AllWallets from "@/pages/Admin/AllWallets";
import type { AdminSideItems } from "@/types";
import { BookOpen } from "lucide-react";

export const adminSideItems: AdminSideItems = [
    {
      title: "Observation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "All Wallets",
          url: "/admin/wallets",
          component: AllWallets
        },
        {
          title: "All Transactions",
          url: "/admin/transactions",
          component: AllTransactions
        },
      ],
    },
    {
      title: "Actions",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ]
import ManageAgent from "@/pages/Admin/ManageAgent";
import ManageUser from "@/pages/Admin/ManageUser";
import type { AdminSideItems } from "@/types";
import { BookOpen, EyeIcon } from "lucide-react";
import { lazy } from "react";

const AllWallets = lazy(() => import("@/pages/Admin/AllWallets"));
const AllTransactions = lazy(() => import("@/pages/Admin/AllTransactions"));

export const adminSideItems: AdminSideItems = [
    {
      title: "Observation",
      url: "#",
      icon: EyeIcon,
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
          title: "Manage User",
          url: "/admin/manage-user",
          component: ManageUser
        },
        {
          title: "Manage Agent",
          url: "/admin/manage-agent",
          component: ManageAgent
        }
      ],
    },
  ]
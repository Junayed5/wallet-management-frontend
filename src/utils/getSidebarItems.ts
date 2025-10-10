import { role } from "@/constants/role";
import { adminSideItems } from "@/routes/adminSideItems";
import { agentSidebarItems } from "@/routes/agentSideItems";
import { userSidebarItems } from "@/routes/userSideItems";
import type { TRole } from "@/types";

export const getAdminSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSideItems];
    case role.agent:
      return [];
    case role.user:
      return [];

    default:
      return [];
  }
};
export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [];
    case role.agent:
      return [...agentSidebarItems];
    case role.user:
      return [...userSidebarItems];

    default:
      return [];
  }
};

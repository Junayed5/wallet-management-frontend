"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icon/Logo";
import { Link } from "react-router";
import { getAdminSidebarItems, getSidebarItems } from "@/utils/getSidebarItems";
import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";
import { da } from "zod/v4/locales";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: walletData } = useGetMyWalletQuery(undefined);
  const data = {
    user: {
      name: walletData?.wallet?.name || "Shadcn",
      phone: walletData?.wallet?.phone || "017xxxxxxxx",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [],
    navMain: getAdminSidebarItems(walletData?.wallet?.role),
    projects: getSidebarItems(walletData?.wallet?.role),
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to={"/"}>
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} role={walletData?.wallet?.role} />
        <NavProjects projects={data.projects} role={walletData?.wallet?.role} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import { generateRoutes, generateUserRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import type { RouteObject } from "react-router";
import { adminSideItems } from "./adminSideItems";
import { userSidebarItems } from "./userSideItems";
import { agentSidebarItems } from "./agentSideItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: FAQ,
        path: "/faq",
      },
      {
        Component: Pricing,
        path: "/pricing",
      },
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/register",
      },
      {
        Component: Unauthorized,
        path: "/unauthorized",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [{index: true, element: <Navigate to="/admin/wallets" />},...generateRoutes(adminSideItems).filter(Boolean) as RouteObject[]],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [{index: true, element: <Navigate to="/user/transactions" />},...generateUserRoutes(userSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.agent as TRole),
    path: "/agent",
    children: [{index: true, element: <Navigate to="/agent/transactions" />},...generateUserRoutes(agentSidebarItems)],
  },
]);

export default router;

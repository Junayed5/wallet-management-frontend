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
import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import { adminSideItems } from "./adminSideItems";
import { userSidebarItems } from "./userSideItems";
import { agentSidebarItems } from "./agentSideItems";

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
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: generateRoutes(adminSideItems).filter(Boolean) as RouteObject[],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [...generateUserRoutes(userSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/agent",
    children: [...generateUserRoutes(agentSidebarItems)],
  },
]);

export default router;

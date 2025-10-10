import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import About from "@/pages/About";
import AgentTransaction from "@/pages/Agent/AgentTransaction";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import UserTransaction from "@/pages/User/UserTransaction";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import { adminSideItems } from "./adminSideItems";

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
    children: [
      {
        Component: UserTransaction,
        path: "transactions",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/Agent",
    children: [
      {
        Component: AgentTransaction,
        path: "transactions",
      },
    ],
  },
]);

export default router;

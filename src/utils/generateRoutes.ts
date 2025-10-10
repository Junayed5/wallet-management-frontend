// import type { ISidebar } from "@/types";

import type { AdminSideItem, IUserSideItem } from "@/types";

export const generateRoutes =(sidebarItems: AdminSideItem[]) => {
    return sidebarItems.flatMap((section) => section?.items?.map(route => ({
        path: route.url,
        Component: route.component
    })));
}
export const generateUserRoutes =(sidebarItems: IUserSideItem[]) => {
    return sidebarItems.map((route) => ({
        path: route.url,
        Component: route.component
    }))
}
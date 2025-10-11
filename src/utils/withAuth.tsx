import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import {Navigate} from 'react-router'

export const withAuth = (Component: ComponentType, requiredRole: TRole) => {
    return function AuthRapper () {
        const {data, isLoading} = useGetMyWalletQuery(undefined)

        if (!isLoading && !data?.wallet?.phone) {
            return <Navigate to="/login"/>
        }

        if (requiredRole && !isLoading && data?.wallet?.role !== requiredRole) {
            return <Navigate to="/unauthorized"/>
        }
        return <Component/>
    }
}
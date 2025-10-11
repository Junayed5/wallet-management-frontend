import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps, ReactNode } from "react";

// IconType supports several common icon patterns:
// - a Lucide icon component (from lucide-react)
// - a React component (e.g. imported SVG component) that accepts SVG props
// - a rendered React node (JSX element)
// - a simple string name (for icon fonts or lookup keys)
export type IconType =
  | LucideIcon
  | ComponentType<SVGProps<SVGSVGElement>>
  | ReactNode
  | string
  | undefined
  | null;

// A single admin sidebar item. Supports nested items via `items`.
export interface AdminSideItem {
  title: string;
  url: string;
  icon?: IconType;
  // Optional component to render when this item is selected
  component?: ComponentType<unknown>;
  // Nested children
  items?: AdminSideItem[];
}

export type AdminSideItems = AdminSideItem[];

// Legacy/other sidebar shape (kept for compatibility). Uses AdminSideItem for items.
export interface ISidebar {
  title: string;
  url: string;
  icon?: IconType;
  items: AdminSideItem[];
}

export interface IUserSideItem {
  name: string;
  url: string;
  icon?: IconType;
  component: ComponentType<unknown>;
}

export type TRole = "ADMIN" | "AGENT" | "USER";

export interface TTransaction {
  _id: string;
  senderNumber: string;
  receiverNumber: string;
  amount: string;
  commission: string;
  transactionType: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface TWallet {
  _id: string;
  name: string;
  phone: string;
  password: string;
  role: string;
  isActive: string;
  isVerified: string;
  wallet: {
    balance: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

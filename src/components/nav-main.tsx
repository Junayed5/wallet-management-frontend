import { ChevronRight } from "lucide-react";
import { isValidElement } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import type { TRole, IconType } from "@/types";

export function NavMain({ items, role }: { items: { title: string; url: string; icon?: IconType; isActive?: boolean; items?: { title: string; url: string }[] }[]; role: TRole; }) {
  return (
    <SidebarGroup>
      {role === "ADMIN" && <SidebarGroupLabel>Platform</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {item.items && (
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {/* Render different icon shapes safely: component, React node, or string */}
                    {item.icon ? (
                      typeof item.icon === "string" ? (
                        <span>{item.icon}</span>
                      ) : Array.isArray(item.icon) ? (
                        /* unlikely: defensive */ <>{item.icon}</>
                      ) : (
                        // if it's already a React element, render it
                        isValidElement(item.icon) ? (
                          item.icon
                        ) : (
                          // otherwise treat it as a component and render
                          (() => {
                            const Icon = item.icon as React.ElementType;
                            return <Icon />;
                          })()
                        )
                      )
                    ) : null}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              )}
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

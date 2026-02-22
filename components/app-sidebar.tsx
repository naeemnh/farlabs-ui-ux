import * as React from "react";

// import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarRail,
  // SidebarSeparator,
} from "@/components/ui/sidebar";
import { Logo } from "./icons";
import { NavUser } from "./nav-user";
import { Separator } from "./ui/separator";

// This is sample data.
type dataType = {
  versions: string[];
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive?: boolean,
      variant?: "destructive" | "default" | undefined;
    }[];
  }[];
};
const data: dataType = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "",
      url: "#",
      items: [
        { title: "Overview", url: "/", isActive: true },
        { title: "GPUs", url: "#" },
        { title: "Rewards", url: "#" },
      ],
    },
    {
      title: "",
      url: "#",
      items: [
        { title: "Logs", url: "#" },
        { title: "Support", url: "#" },
        { title: "Log out", url: "#", variant: "destructive" as const },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild> */}
        <a href="#">
          <Logo className="w-full h-8" />
        </a>
        {/* </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group, index) => (
          <React.Fragment key={group.title || `main-${index}`}>
            <SidebarGroup>
              {group.title ? (
                <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              ) : null}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((navItem) => (
                    <SidebarMenuItem key={navItem.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={navItem.isActive}
                        className={
                          navItem.variant === "destructive"
                            ? "text-destructive"
                            : undefined
                        }
                      >
                        <a href={navItem.url}>{navItem.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {index < data.navMain.length - 1 && <Separator className="mx-auto w-[90%]! bg-gray-500" />}
          </React.Fragment>
        ))}
      </SidebarContent>
      <SidebarFooter>
        {/* TODO: Add version and Build date */}
        <div className="flex flex-col gap-1 text-xs">
          <span>xxxmorata</span>
          <span>Operator Account</span>
        </div>
        {/* <NavUser user={{ name: "xxxmorata", email: "Operator Account", avatar: "https://github.com/shadcn.png" }} hideAvatar /> */}
        <Separator className="bg-gray-500" />
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-gray-500">
          {/* "version" and "build date" labeles should be on the left side the their respective values should be on the right side. */}
            <div className="flex items-center w-full justify-between">
              <span>Version</span>
              <span>1.0.0</span>
            </div>
            <div className="flex items-center w-full justify-between">
              <span>Build date</span>
              <span>1 Feb, 2026</span>
            </div>
        </div>
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar >
  );
}

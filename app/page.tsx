import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>
          <h1>Hello World</h1>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DashboardHeader,
  MetricsGrid,
  LiveMetricsSection,
  JobsChart,
} from "@/components/organisms"
import { NodeStatusProvider } from "@/contexts/node-status-context"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <NodeStatusProvider>
          <DashboardHeader />
          <div className="flex flex-1 flex-col gap-4 p-6 pt-4">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <MetricsGrid />
            <div className="grid gap-4 grid-cols-4">
              <LiveMetricsSection />
              <div className="col-span-3">
                <JobsChart />
              </div>
            </div>
          </div>
        </NodeStatusProvider>
      </SidebarInset>
    </SidebarProvider>
  )
}

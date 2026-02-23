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

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header> */}
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
      </SidebarInset>
    </SidebarProvider>
  )
}

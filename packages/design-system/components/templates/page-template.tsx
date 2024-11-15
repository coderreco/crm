import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";
import { Separator } from "@repo/design-system/components/ui/separator";
import { SidebarTrigger } from "@repo/design-system/components/ui/sidebar";
import Breadcrumbs, { Crumb } from "../breadcrumbs";

const defaultCrumbs = [
  { text: "Building Your Application", type: "link" as const, href: "#" },
  { text: "Data Fetching", type: "page" as const },
];

const PageWrapper = ({
  children,
  breadcrumbs = defaultCrumbs,
  ...props
}: {
  children: React.ReactNode;
  breadcrumbs: Crumb[];
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumbs crumbs={breadcrumbs} />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {children}
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
};

export default PageWrapper;

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";

export type Crumb = {
  text: string;
  type: "link" | "page";
  href?: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList key="i">
        {crumbs.map((item, index) => (
          <>
            <BreadcrumbItem key={index} className="hidden md:block">
              {item.type === "link" ? (
                <BreadcrumbLink href={item.href}>{item.text}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.text}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < 1 && <BreadcrumbSeparator className="hidden md:block" />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

import type { Metadata } from "next";
import type { ReactElement } from "react";
import PageWrapper from "@repo/design-system/components/templates/page-template";

const title = "Projects";
const description = "Your projects";

export const metadata: Metadata = {
  title,
  description,
};

const App = async (): Promise<ReactElement> => {
  // const pages = await database.page.findMany();

  return (
    <PageWrapper
      breadcrumbs={[
        { text: "Dashboard", type: "link", href: "/" },
        { text: "Projects", type: "page" },
      ]}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </PageWrapper>
  );
};

export default App;

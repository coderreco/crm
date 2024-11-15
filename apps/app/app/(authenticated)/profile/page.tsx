import type { Metadata } from "next";
import type { ReactElement } from "react";
import PageWrapper from "@repo/design-system/components/templates/page-template";

const title = "Profile";
const description = "Cleaning Website Templates";

export const metadata: Metadata = {
  title,
  description,
};

const App = async (): Promise<ReactElement> => {
  // const pages = await database.page.findMany();

  return (
    <PageWrapper
      breadcrumbs={[
        { text: "Home", type: "link", href: "/" },
        { text: "Profile", type: "page" },
      ]}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </PageWrapper>
  );
};

export default App;

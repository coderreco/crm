import { ModeToggle } from "@repo/design-system/components/mode-toggle";
import { env } from "@repo/env";
import { CommandIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@repo/design-system/components/logo";

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className="container relative grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
      <div className="absolute inset-0 bg-emerald-600" />
      <div className="relative z-20 flex items-center font-medium text-lg">
        <Logo className="mr-2 h-12 w-12 text-white" />
        <span>Cleaning Website Templates</span>
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-md">
            &ldquo;One week in, and the new website &lbrack;the basis for this
            template&rbrack; and it's emphasis on lead gen + SEO has already
            generated far more organic leads AND booked cleans than the old BK
            site in a similar time span. Plus, @marcusmclayton and @CoderreCo
            are great to work with &rdquo;
          </p>
          <footer className="text-sm">@maxtendero</footer>
        </blockquote>
      </div>
    </div>
    <div className="lg:p-8">
      <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-6">
        {children}
        <p className="px-8 text-center text-muted-foreground text-sm">
          By clicking continue, you agree to our{" "}
          <Link
            href={new URL("/legal/terms", env.NEXT_PUBLIC_WEB_URL).toString()}
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href={new URL("/legal/privacy", env.NEXT_PUBLIC_WEB_URL).toString()}
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);

export default AuthLayout;

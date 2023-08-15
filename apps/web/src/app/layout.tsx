import "./globals.css";
import type { Metadata } from "next";
import { StrictMode } from "react";
import Logo from "../components/logo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Indexing-Brain",
  description: "A name search engine for genealogy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width" />
        </head>
        <body className="bg-[url(/bg.jpg)] bg-auto bg-repeat flex flex-col">
          <header className="navbar p-5 bg-neutral text-neutral-content">
            <div className="navbar-start">
              <Link href="/" className="text-lg">
                <Logo />
              </Link>
            </div>
          </header>
          <main className="flex grow text-primary backdrop-blur-sm backdrop-brightness-50 p-8">
            {children}
          </main>
          <footer className="footer p-5 bg-neutral text-neutral-content">
            <div className="mx-auto">
              <span>
                Copyright © 2023 - <Logo /> Team
              </span>
            </div>
          </footer>
        </body>
      </html>
    </StrictMode>
  );
}

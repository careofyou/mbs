import React from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

import { links } from "@/lib/data";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition text-gray-700 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-32">
      <Container> 
        <div className="border-t border-zinc-100 pt-8 pb-16 ">
          <Container>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 ">
                {links.map((navigation) => (
                  <NavLink key={navigation.href} href={navigation.href}>
                    {navigation.label}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                © {new Date().getFullYear()} ООО «Медико-биологический Союз»
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  );
}

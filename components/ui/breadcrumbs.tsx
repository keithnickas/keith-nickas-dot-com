// Sourced from https://github.com/kcabading/nextjs-breadcrumb
"use client";
import React, { ReactNode, useCallback } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type BreadcrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const LINKS: Record<string, string> = {
  cv: "Resumé",
  "flight-results": "Flight Results Prototype",
  "spotlight-image": "Spotlight Image and Video"
};

const Breadcrumbs = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: BreadcrumbProps) => {
  const paths = usePathname();
  const router = useRouter();
  const pathNames = paths.split("/").filter((path) => path);
  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="flex mt-16 p-5 bg-teal-900 justify-between">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let linkName = LINKS[link] ? LINKS[link] : link;
          let itemLink = capitalizeLinks
            ? linkName[0].toUpperCase() + linkName.slice(1, linkName.length)
            : linkName;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
      {pathNames.length > 0 ? <button type="button" onClick={() => goBack()}>Go Back</button> : null}
    </div>
  );
};

export default Breadcrumbs;

"use client";
import React, { ReactNode, useCallback } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import hash from "object-hash";

type BreadcrumbProps = {
  activeClasses?: string;
  capitalizeLinks?: boolean;
  containerClasses?: string;
  homeElement: ReactNode;
  listClasses?: string;
  separator?: ReactNode;
};

const LINKS: Record<string, string> = {
  cv: "Resumé",
  "flight-results": "Flight Results Prototype",
  "spotlight-image": "Spotlight Image and Video",
  "vue-sdk": "Vue SDK",
  "technical-design": "Technical Design Document",
};

const Breadcrumbs = ({
  activeClasses,
  capitalizeLinks,
  containerClasses,
  homeElement,
  listClasses,
  separator,
}: BreadcrumbProps) => {
  const paths = usePathname();
  const router = useRouter();
  const pathNames = paths.split("/").filter((path) => path);
  const hasPathNames = pathNames.length > 0;
  const goBack = useCallback(() => {
    router.back();
  }, [router]);
  const breadcrumbs = pathNames.map((link, index) => {
    let href = `/${pathNames.slice(0, index + 1).join("/")}`;
    let itemClasses =
      paths === href ? `${listClasses} ${activeClasses}` : listClasses;
    let linkName = LINKS[link] ?? link;
    let itemLink = capitalizeLinks
      ? linkName[0].toUpperCase() + linkName.slice(1, linkName.length)
      : linkName;
    return (
      <React.Fragment key={hash({link, linkName, index})}>
        <li className={itemClasses}>
          <Link href={href} className="hover:underline truncate md:overflow">{itemLink}</Link>
          {pathNames.length !== index + 1 && separator}
        </li>
      </React.Fragment>
    );
  });

  return (
    <div className="hidden md:flex mt-16 p-5 bg-teal-900 justify-between">
      <div className="flex container mx-auto justify-between">
        <ul className={containerClasses}>
          <li className={listClasses}>
            <Link href={"/"}>{homeElement}</Link>
            {hasPathNames && <>{separator}</>}
          </li>
          {breadcrumbs}
        </ul>
        {hasPathNames ? (
          <button type="button" onClick={goBack}>
            Go Back
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Breadcrumbs;

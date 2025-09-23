import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

export type ImageButtonLinkProps = {
  className?: string;
  image: {
    src: StaticImageData | React.ReactElement;
    width?: number;
    height?: number;
    alt?: string;
    className?: string;
  };
  link: {
    href: string;
    target?: string;
    rel?: string;
    className?: string;
  };
};

export function ImageButtonLink({
  className,
  image,
  link,
}: ImageButtonLinkProps) {

  return (
    <div className={`flex gap-4${className ? ` ${className}` : ""}`}>
      <Link
        className={`btn-sm md:btn-lg text-white hover:bg-teal-600 hover:bg-transparent ml-3 hover:btn-lift${
          link.className ? ` ${link.className}` : ""
        }`}
        href={link.href}
        target={link.target}
        rel={link.rel}
      >
        {React.isValidElement(image.src) ? (
          image.src
        ) : (
          <Image
            className={`h-auto${image.className ? ` ${image.className}` : ""}`}
            src={image.src as StaticImageData}
            alt={image.alt || ""}
            width={image.width}
            height={image.height}
          />
        )}
      </Link>
    </div>
  );
}

/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import type { FC } from "react";

const Image: FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt || ""} />;
};

export default qwikify$(Image);

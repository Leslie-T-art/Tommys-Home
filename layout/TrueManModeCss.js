"use client";
import { context } from "@/context/context";
import { useContext } from "react";

const tommyshomeModeCss = () => {
  const { mode } = useContext(context);
  return (
    <head>
      <link
        rel="stylesheet"
        href={`css/style-${mode ? "dark" : "light"}.css`}
      />
    </head>
  );
};
export default tommyshomeModeCss;

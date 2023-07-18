import React, { ReactNode } from "react";
interface props {
  children: ReactNode;
}
export const Layout = ({ children }: props) => {
  return <div>{children}</div>;
};

import { ReactNode } from "react";

import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import { Container } from "./component/Container";

interface props {
  children: ReactNode;
}
export const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Container />
        <Footer />
      </div>
    </>
  );
};

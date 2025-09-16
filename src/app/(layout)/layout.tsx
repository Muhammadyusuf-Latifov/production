import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { FC, memo, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default memo(Layout);

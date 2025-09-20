import Me from "@/components/me/Me";
import { memo, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="Layout">
      <Me />
      <h2>Layout</h2>
      {children}
    </div>
  );
};

export default memo(Layout);

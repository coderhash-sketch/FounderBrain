import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen gradient-bg">
    <AppSidebar />
    <main className="flex-1 ml-64 p-8 overflow-y-auto">
      {children}
    </main>
  </div>
);

export default AppLayout;

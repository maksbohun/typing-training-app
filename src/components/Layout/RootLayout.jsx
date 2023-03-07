import { Outlet } from "react-router-dom";
import { MainNavigation } from "./MainNavigation";

export function Root() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

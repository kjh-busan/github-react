import React from "react";
import MainNavigation from "./components/MainNavigation";
import Outlet from "./components/Outlet";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

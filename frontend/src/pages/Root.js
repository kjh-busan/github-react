import React from "react";
import MainNavigation from "./components/MainNavigation";
import { Outlet } from "react-route-dom";

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

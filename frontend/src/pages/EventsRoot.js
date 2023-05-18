/* eslint-disable react/jsx-no-undef */
import { Outlet } from "react-router-dom";
import React from "react";

export default function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

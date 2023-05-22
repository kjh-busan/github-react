import { Outlet, useLoaderData } from "react-route-dom";
import MainNavigation from "./components/MainNavigation";

export default function RootLayout() {
  const events = useLoaderData();
  console.log(events);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

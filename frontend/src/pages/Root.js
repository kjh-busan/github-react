import { Outlet, useNavigation } from "react-route-dom";
import MainNavigation from "./components/MainNavigation";

export default function RootLayout() {
  const navigation = useNavigation();

  const events = useLoaderData();
  console.log(events);

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

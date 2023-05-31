import { useLoaderData, defer } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  return <Await resolve={events}>{(loaderEvents) => <EventsList events={loaderEvents}></EventsList></Await>;
}
export default EventsPage;

async function loaderEvents() {
  // setIsLoading(true);
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw Error("Fetching events failed.");
  } else {
    return response;
  }
  // setIsLoading(false);
  // fetchEvents();
}

export function loader() {
  defer({
    event: loadEvents(),
  });
}

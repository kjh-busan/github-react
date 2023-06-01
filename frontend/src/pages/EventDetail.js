import React from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Await resolve={event}>
        {(loaderdEvent) => <EventItem event={loadedEvent} />}
      </Await>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
      <EventItem EventItem event={data.event} />
      <EventsList events={data.events} />
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ messsage: "Could not fetch event details" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action() {
  const eventId = params.eventId;

  if (!response.ok) {
    throw json({ messsage: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}
import React from "react";
import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
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
    return response;
  }
}
export async function load({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/e vents/" + id, {
    method: request.method,
  });
}

export async function action() {
  const eventId = params.eventId;

  if (!response.ok) {
    throw json({ messsage: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}
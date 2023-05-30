import React from "react";
import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem EventItem event={data.event} />;
}

export default EventDetailPage;

export async function load({request, params}) {
  const id = params.eventId;

 const response = await fetch('http://localhost:8080/e vents/' + id)

 if (!response.ok) {
  throw json({messsage: 'Could not fetch event details'}, {status: 500})

 } else {
  return response;
 }
}

export async function action() {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw json({ messsage: "Could not delete event" }, { status: 500 });
  }
}
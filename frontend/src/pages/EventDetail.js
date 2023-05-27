import React from "react";
import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetail() {
  return (
<EventItem EventItem event={} />
  );
}

export default EventDetailPage;

export async function load({request, params}) {
  const id = params.eventId;

 return fetch('http://localhost:8080/e vents/' + id)
}
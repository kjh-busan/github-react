/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "another event",
  },
];
export default function EventPage() {
  return (
    <>
      <div>EventPage</div>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            {event.title}
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

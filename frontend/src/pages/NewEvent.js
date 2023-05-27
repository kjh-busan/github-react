import EventForm from "../components/EventForm";

function NewEventPage() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return <EventForm />;
}
export default NewEventPage;


export async function action() {
  fetch("http://localhost:8080/events/");
}

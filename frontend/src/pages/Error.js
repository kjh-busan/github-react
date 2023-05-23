import { useRouteError } from "react-router-dom";
import React from "react";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurered!";
  let message = "Somthing went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find";
  }

  return (
    <PageContent title={title}>
      <p>Something went wrong!</p>
    </PageContent>
  );
}
 


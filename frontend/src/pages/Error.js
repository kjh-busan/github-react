import { useRouteError } from "react-router-dom";
import React from "react";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurered!";
  let message = "Somthing went wrong!";

  return (
    <PageContent title="An error occurered!">
      <p></p>
    </PageContent>
  );
}
 


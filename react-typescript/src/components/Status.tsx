import { stat } from "fs";
import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};
function Status(props: StatusProps) {
  const { status } = props;
  let message: string = "";

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data Fetched Successfully";
  } else if (status === "error") {
    message = "Error Fetching Data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}

export default Status;

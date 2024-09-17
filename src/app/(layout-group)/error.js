"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <>
      <h1 style={{ color: "red" }}>Something went wrong, please try again.</h1>
      <h1 style={{ color: "red" }}>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </>
  );
};

export default Error;

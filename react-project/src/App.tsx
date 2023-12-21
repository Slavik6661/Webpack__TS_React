import React from "react";
import "./styles.css";
import logo1 from "./images/logo.png";
import logo2 from "./images/logo.svg";

const App = (): JSX.Element => {
  return (
    <>
      <h1>React TypeScript Webpack project</h1>
      {process.env.NODE_ENV}
      {process.env.NODE_ENV == "development" && "We are in dev environment"}
      {process.env.NODE_ENV == "production" && "We are in prod environment"}
    </>
  );
};
export { App };

import React from "react";
import { useRoutes } from "react-router-dom";
import { Routes } from "./routes";

const App = () => {
  const routing = useRoutes(Routes);
  return <>{routing}</>;
};

export default App;
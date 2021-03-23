import React, { FC } from "react";
import { AppRoutes } from "./AppRoute";

export  const AppInner: FC = () => {
  return <AppRoutes />;
};
export const App: FC = () => {
  return <AppInner />;
};

App.displayName = "App";
export default App;
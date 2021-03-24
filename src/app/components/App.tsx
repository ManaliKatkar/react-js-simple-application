import { FC } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { AppRoutes } from "./AppRoute";

// Create a client
const queryClient = new QueryClient();

export const AppInner: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export const App: FC = () => {
  return <AppInner />;
};

App.displayName = "App";

export default App;

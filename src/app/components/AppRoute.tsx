import React from "react";
import { Suspense, lazy, memo, FC } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);

const HomePage = lazy(() =>
  import("../pages/HomePage").then(({ HomePage }) => ({ default: HomePage }))
);

const LoginPage = lazy(() =>
import("../../auth/pages/Login").then(({ LoginPage }) => ({ default: LoginPage }))
);

export const AppRoutes: FC = memo(() => {
  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/register">
            <LoginPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
});

AppRoutes.displayName = "App Routes";

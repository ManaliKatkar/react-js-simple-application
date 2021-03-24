import React, { ReactNode } from "react";

import { SecondaryNav, TopBar, MainFooter } from "../components";
import { ROUTES } from "../constants";

interface Props {
  topBarContentLeft: ReactNode;
  footerContent?: ReactNode;
}

const GLOBAL_MENU_ITEMS = [
  {
    title: ROUTES.home.title,
    to: ROUTES.home.url,
    exact: true,
  },
  {
    title: ROUTES.contact.title,
    to: ROUTES.contact.url,
  },
  {
    title: ROUTES.login.title,
    to: ROUTES.login.url,
  },
  {
    title: ROUTES.signup.title,
    to: ROUTES.signup.url,
  },
];

export const MainPageLayout: React.FC<Props> = ({
  topBarContentLeft,
  children,
}) => {
  return (
    <>
      <TopBar
        topBarContentRight={topBarContentLeft}
        topBarContentLeft={<SecondaryNav menuItems={GLOBAL_MENU_ITEMS} />}
      />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};

MainPageLayout.displayName = "MainPageLayout";

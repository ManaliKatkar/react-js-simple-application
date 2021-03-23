import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React from "react";
import { NavLink } from "react-router-dom";

export interface MenuItemProps {
  title: string;
  to: string;
  comingSoon?: boolean;
  exact?: boolean;
}

interface Props {
  menuItems: MenuItemProps[];
}

export const SecondaryNav: React.FC<Props> = ({ menuItems }) => {
  return (
    <Navbar>
      {menuItems.map((item) => (
        <MenuItems
          to={item.to}
          exact={item.exact}
          key={item.to}
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          {item.title}
        </MenuItems>
      ))}
    </Navbar>
  );
};

SecondaryNav.displayName = "SecondaryNav";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  flex-wrap: wrap;
  text-transform: capitalize;
   height: 100%;
}
`;

export const MenuItems = styled(NavLink)`
color: white;
text-decoration: none;
height: 100%;
display: flex;
align-items: center;
width:20%;
justify-content: center;

  &:active, &:hover {
    font-weight: bold;
    background: rgba(0,0,0,.03);
  }
}
`;

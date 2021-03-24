import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  topBarContentRight?: ReactNode;
  topBarContentLeft?: ReactNode;
}

export const TopBar: FC<Props> = ({
  topBarContentRight,
  topBarContentLeft,
}) => {

  return (
    <Header>
      {topBarContentRight}
      {topBarContentLeft}
    </Header>
  );
};

TopBar.displayName = "TopBar";

export const Header = styled.div`
  background: #00e4bc;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height:80px;
  top: 0;
  left: 0;
  right: 0;
  position: sticky;
  z-index: 2;
  transition: transform 0.4s;
}`;

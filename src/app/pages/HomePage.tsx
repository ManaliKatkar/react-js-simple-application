import React from "react";
import styled from "@emotion/styled";

import {  MainPageLayout } from "../../global/layout";

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomePage: React.FC = () => {
  return (
    <MainPageLayout
      topBarContentLeft={
        <div>LOGO</div>
      }
    >
      <MainWrapper>
        
      </MainWrapper>
    </MainPageLayout>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;

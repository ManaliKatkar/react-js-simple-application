import React from "react";
import { MutableSnapshot, useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

import { MainPageLayout } from "../../global/layout";
import { authUserState } from "../../auth";


export const HomePage: React.FC = () => {
  const setAuthUser = useSetRecoilState(authUserState);
  
  const initializeState = ({ set }: MutableSnapshot) => {
    // const localStoredAtom = localStorage.getItem(setAuthUser)
    // if (localStoredAtom) {
      //   set(setAuthUser, JSON.parse(localStoredAtom).value)
      // }
  };
  
  return (
    // <RecoilRoot initializeState={initializeState}>
    <MainPageLayout topBarContentLeft={<div>{setAuthUser}</div>}>
        <MainWrapper></MainWrapper>
      </MainPageLayout>
    // </RecoilRoot>
    );
  };
  
  HomePage.displayName = "HomePage";
  
  export default HomePage;
  
  export const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
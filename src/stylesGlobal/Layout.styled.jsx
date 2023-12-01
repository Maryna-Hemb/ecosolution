import styled from "styled-components";
import * as Variables from "./variables";

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 36px 20px 24px 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${Variables.Colors.backGroundColor};
  color: ${Variables.Colors.textColor};
  ${Variables.media.mobile} {
    width: 440px;
  }

  //   font-size: 18px;
  //   text-align: center;
  //   background-color: #dde1f5;
  //   color: #010101;
  //   box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 30px;
`;

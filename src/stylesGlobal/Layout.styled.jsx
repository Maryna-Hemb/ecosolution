import styled from "styled-components";
import * as Variables from "./variables";

const Layout = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  //   padding: 0px 20px 24px 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${Variables.Colors.backGroundColor};
  color: ${Variables.Colors.textColor};
  ${Variables.media.mobile} {
    width: 480px;
  }
`;
const MainLayout = styled.div`
  padding: 0px 20px 24px 20px;
`;

export { Layout, MainLayout };

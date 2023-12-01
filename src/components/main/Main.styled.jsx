import styled from "styled-components";
import * as Variables from "../../stylesGlobal/variables";

const MainSection = styled.section`
  padding-top: 222px;
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${Variables.Colors.accentColor};
  }
`;

const H1 = styled.h1`
  margin-bottom: 24px;
  font-family: "Oswald";
  font-size: 36px;
  line-height: 1;
  font-weight: 400;
  word-spacing: 0.01em;
  text-transform: uppercase;
`;
const MainText = styled.p`
  margin-bottom: 24px;
  text-align: justify;
  font-family: "FiraSans";
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.04em;
  word-spacing: 0.01em;
  font-weight: 400;
`;
const LearnMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 141px;
  height: 39px;
  margin-bottom: 24px;
  background-color: inherit;
  border: 1px solid rgba(151, 210, 139, 1);
  border-radius: 500px;
  padding: 4px 4px 4px 16px;
  margin-left: auto;
  margin-right: auto;
  transition: background-color ${Variables.animation},
    color ${Variables.animation}, border-color ${Variables.animation};
  &:hover,
  &:focus {
    background-color: ${Variables.Colors.focusColor};
    color: ${Variables.Colors.accentColor};
    border-color: ${Variables.Colors.focusColor};
  }
`;
export { MainSection, H1, MainText, LearnMoreBtn };

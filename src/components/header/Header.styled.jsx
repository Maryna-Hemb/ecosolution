import styled from "styled-components";
import * as Variables from "../../stylesGlobal/variables";

const HeaderSection = styled.header`
  position: fixed;
  width: inherit;
  z-index: 100;
  background-color: red;
  padding: 36px 20px 36px 20px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoName = styled.p`
  font-family: "AllRoundGothic";
  font-size: 33px;
  margin: 0px 4px;
`;
const LogoText = styled.p`
  font-family: "CASaygonText";
  font-size: 10px;
  line-height: 0.9;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  margin-bottom: -3px;
`;
const LogoSpan = styled.span`
  color: ${Variables.Colors.accentColor};
`;
const BurgerMenuBtn = styled.button`
  width: 39px;
  height: 39px;
  padding: 11.5px 11.5px;
  background-color: ${Variables.Colors.burgerMenuBtnColor};
  border: none;
  border-radius: 50%;
  transition: background-color ${Variables.animation};
  &:hover,
  &:focus {
    background-color: ${Variables.Colors.accentColor};
  }
`;
export { HeaderSection, Logo, LogoName, LogoText, LogoSpan, BurgerMenuBtn };

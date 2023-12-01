import * as Variables from "../../stylesGlobal/variables";
import styled from "styled-components";

const HeaderSection = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoName = styled.p`
  font-family: "AllRoundGothicW01Medium";
  font-size: 33px;
  margin: 0px 4px;
`;
const LogoText = styled.p`
  font-family: "CASaygonTextRegular";
  font-size: 10px;
  text-transform: uppercase;
`;
const LogoSpan = styled.span`
  color: ${Variables.Colors.accentColor};
`;
const BurgerMenuBtn = styled.button`
  width: 39px;
  height: 39px;
  background-color: ${Variables.Colors.burgerMenuBtnColor};
  border: none;
  border-radius: 50%;
  padding: 11.5px 11.5px;
`;
export { HeaderSection, Logo, LogoName, LogoText, LogoSpan, BurgerMenuBtn };

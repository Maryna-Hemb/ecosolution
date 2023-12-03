import styled from "styled-components";
import * as Variables from "../../stylesGlobal/variables";

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

export { Logo, LogoName, LogoText, LogoSpan };

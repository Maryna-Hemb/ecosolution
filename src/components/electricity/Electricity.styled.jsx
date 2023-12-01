import styled from "styled-components";
import * as Variables from "../../stylesGlobal/variables";

const ElectricitySection = styled.section`
  padding: 36px 0px 36px;
  font-family: "Oswald";
  text-align: center;
  line-height: 1;
`;
const H2 = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 400;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 48px;
    background-color: ${Variables.Colors.accentColor};
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Quantity = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  font-size: 48px;
  color: ${Variables.Colors.accentColor};
  text-transform: uppercase;
  font-weight: 700;
`;
const Demention = styled.span`
  font-size: 24px;
  color: ${Variables.Colors.textColor};
  text-transform: none;
  margin-left: 8px;
`;
export { ElectricitySection, H2, Quantity, Demention };

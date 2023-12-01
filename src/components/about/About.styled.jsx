import styled from "styled-components";
import * as Variables from "../../stylesGlobal/variables";

const AboutSection = styled.section`
  padding: 24px 0px 36px;
  font-family: "FiraSans";
  font-size: 16px;
  letter-spacing: -0.04em;
  font-weight: 400;
`;

const Contacts = styled.ul`
  text-align: center;
  margin-bottom: 36px;
`;
const Adress = styled.li`
  margin-bottom: 8px;
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 36px;
`;

const H2 = styled.h1`
  margin-bottom: 24px;
  font-family: "Oswald";
  font-size: 28px;
  line-height: 1;
  letter-spacing: auto;
  word-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 400;
`;
const AboutText = styled.p`
  margin-bottom: 24px;
  text-align: justify;
  line-height: 1.2;
  word-spacing: 0.01em;
`;
const ValuesList = styled.ul`
  display: grid;
  grid-template-columns: 148px 148px;
  grid-auto-rows: 197px;
  gap: 24px;
  justify-content: space-between;
`;
const Item = styled.li`
  padding: 12px;
  text-align: justify;
  line-height: 1.2;
  word-spacing: 0.01em;
  background-color: ${Variables.Colors.backGroundCardColor};
`;

export { AboutSection, H2, AboutText, ValuesList, Contacts, Adress, Img, Item };

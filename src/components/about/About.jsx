import windGeneration1x from "../../images/aboutSection/mobile@1x.png";
import windGeneration2x from "../../images/aboutSection/mobile@2x.png";
import ContactsInf from "../../data/contactsData.json";
import {
  AboutSection,
  Contacts,
  Adress,
  Img,
  H2,
  AboutText,
  ValuesList,
  Item,
  Openness,
  Responsibility,
  Innovation,
  Quality,
  ValueText,
} from "./About.styled";

export const About = () => {
  return (
    <AboutSection>
      <Contacts>
        <Adress>{ContactsInf.address}</Adress>
        <li>
          <a href="mailto:office@ecosolution.com">{ContactsInf.e_mail}</a>
        </li>
      </Contacts>

      <Img
        srcSet={`${windGeneration1x} 360w, ${windGeneration2x} 720w`}
        src={`${windGeneration1x}`}
        alt="Landscape with the wind generators"
      />

      <H2>Main values of our company</H2>
      <AboutText>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </AboutText>
      <ValuesList>
        <Item>
          <Openness>Openness</Openness>
          <ValueText>to the world, people, new ideas and projects</ValueText>
        </Item>
        <Item>
          <Responsibility>Responsibility</Responsibility>
          <ValueText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ValueText>
        </Item>
        <Item>
          <Innovation>Innovation</Innovation>
          <ValueText>
            we use the latest technology to implement non-standard solutions
          </ValueText>
        </Item>
        <Item>
          <Quality>Quality</Quality>
          <ValueText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ValueText>
        </Item>
      </ValuesList>
    </AboutSection>
  );
};

import ArrowRight from "../../images/svg/arrowRight.svg";
import { MainSection, H1, MainText, LearnMoreBtn } from "./Main.styled";
export const Main = () => {
  return (
    <MainSection>
      <H1>RENEWABLE ENERGY For any task</H1>
      <MainText>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </MainText>
      <LearnMoreBtn type="button">
        <p>Learn more</p>
        <img src={`${ArrowRight}`} alt="button arrow" width={31} />
      </LearnMoreBtn>
    </MainSection>
  );
};

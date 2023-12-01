import {
  ElectricitySection,
  H2,
  Quantity,
  Demention,
} from "./Electricity.styled";

export const Electricity = () => {
  return (
    <ElectricitySection>
      <H2>Electricity we produced for all time</H2>
      <div></div>
      <Quantity>
        1.134.147.814
        <Demention> kWh</Demention>
      </Quantity>
    </ElectricitySection>
  );
};

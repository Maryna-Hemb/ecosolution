import ScrollToHashElement from "../utils/ScrollToHashElement";
import { Header } from "../components/header/Header";
import { Layout } from "../stylesGlobal/Layout.styled";

export const LandingPage = () => {
  return (
    <>
      <Layout>
        <ScrollToHashElement />
        <Header />
      </Layout>
    </>
  );
};

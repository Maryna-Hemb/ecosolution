import ScrollToHashElement from "../utils/ScrollToHashElement";
import { Layout, MainLayout } from "../stylesGlobal/Layout.styled";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";

export const LandingPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <MainLayout>
          <Main />
          <About />
        </MainLayout>
        <ScrollToHashElement />
      </Layout>
    </>
  );
};

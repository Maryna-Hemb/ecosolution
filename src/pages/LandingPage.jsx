import ScrollToHashElement from "../utils/ScrollToHashElement";
import { Layout, MainLayout } from "../stylesGlobal/Layout.styled";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";
import { Electricity } from "../components/electricity/Electricity";
import { Cases } from "../components/cases/Cases";
import { FAQ } from "../components/FAQs/FAQ";
import { ContactUs } from "../components/contactUs/ContactUs";

export const LandingPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <MainLayout>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <FAQ />
          <ContactUs />
        </MainLayout>
        <ScrollToHashElement />
      </Layout>
    </>
  );
};

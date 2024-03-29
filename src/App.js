import React from "react";
import { CookiesProvider } from "react-cookie";
import Header from "./components/Header";
import HeroHome from "./components/Hero/HeroHome";
import HeroAbout from "./components/Hero/HeroAbout/Index";
import HeroResume from "./components/Hero/HeroResume";
import HeroPortfolio from "./components/Hero/HeroPortfolio/Index";
import HeroBlog from "./components/Hero/HeroBlog";
import HeroContact from "./components/Hero/HeroContact";
import NextPrevPage from "./components/NextPrevPage";
import BlogSingleModal from "./components/BlogSingleModal";
import PortfolioModals from "./components/Portfolio/PortfolioModals";
import CookieBanner from "./components/CookieBanner";
import CookiePolicyModal from "./components/CookiePolicyModal";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import { GlobalProvider } from "./lib/globalState";
import CookiesModal from "./components/CookiesModal/CookiesModal";

function App() {
  return (
    <CookiesProvider>
      <GlobalProvider>
        <div data-spy="scroll" data-target="#scrollspy" data-offset="1">
          <div id="overlayer" />
          <span className="loader" />
          <BlogSingleModal />
          <PortfolioModals />
          <Header />
          <main id="main">
            <HeroHome />
            <HeroAbout />
            <HeroResume />
            {/*<HeroPortfolio />*/}
            <HeroBlog />
            <HeroContact />
          </main>
          <NextPrevPage />
          <CookieBanner />
          <CookiesModal />
          <CookiePolicyModal />
          <PrivacyPolicyModal />
        </div>
      </GlobalProvider>
    </CookiesProvider>
  );
}

export default App;

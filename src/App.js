import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import HeroHome from "./components/Hero/HeroHome";
import HeroAbout from "./components/Hero/HeroAbout";
import HeroResume from "./components/Hero/HeroResume";
import HeroPortfolio from "./components/Hero/HeroPortfolio";
import HeroBlog from "./components/Hero/HeroBlog";
import HeroContact from "./components/Hero/HeroContact";
import NextPrevPage from "./components/NextPrevPage";
import PortfolioSingleModal from "./components/PortfolioSingleModal";
import BlogSingleModal from "./components/BlogSingleModal";

function App() {
  return (
    <div data-spy="scroll" data-target="#scrollspy" data-offset="1">
      <div id="overlayer" />
      <span className="loader" />
      <PortfolioSingleModal />
      <BlogSingleModal />
      <Header />
      <main id="main">
        <HeroHome />
        <HeroAbout />
        <HeroResume />
        <HeroPortfolio />
        <HeroBlog />
        <HeroContact />
      </main>
      <NextPrevPage />
    </div>
  );
}

export default App;

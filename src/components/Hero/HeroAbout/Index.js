import React from "react";
import CVInfo from "./CVInfo";
import AboutInfo from "./AboutInfo";
import Services from "./Services";
import ClientSays from "./ClientSays";
import Footer from "../../Footer";

function Index({}) {
  return (
    <section id="about" className="about">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <CVInfo />
            <AboutInfo />
            <Services />
            {/*<ClientSays />*/}
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;

import React from "react";
import CVInfo from "./CVInfo";
import AboutInfo from "./AboutInfo";
import Services from "./Services";
import ClientSays from "./ClientSays";

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;

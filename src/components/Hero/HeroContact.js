import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import useGlobalState from "../../lib/globalState";
import { fetchData } from "../../lib/data";

function HeroContact({}) {
  const { lang } = useGlobalState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [contactTexts, setContactTexts] = useState(null);

  useEffect(() => {
    loadContactTexts();
  }, []);

  const loadContactTexts = async () => {
    const response = await fetchData("global", lang);
    if (response.status === 200) {
      setContactTexts(response.data.global.heroContact);
    } else {
      console.log(response);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      setLoading(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      };
      try {
        const fetchResponse = await fetch(`/sendEmail.php`, options);
        const data = await fetchResponse.json();
        if (data.status === "Congratulation") {
          setStatusMessage(contactTexts.thanks);
        } else {
          console.log(e);
          setStatusMessage(contactTexts.generalError);
        }
      } catch (e) {
        console.log(e);
        setStatusMessage(contactTexts.generalError);
      }
      setLoading(false);
    } else {
      setStatusMessage(contactTexts.requiredFields);
    }
  };

  const handleChange = (e, setter) => {
    setStatusMessage("");
    setter(e.target.value);
  };

  if (!contactTexts) {
    return null;
  }

  return (
    <section id="contact" className="contact">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    {contactTexts.titleWhite}{" "}
                    <span className="base-color">{contactTexts.titlePink}</span>
                  </h2>
                  <p className="text-muted mb-5 max-width-450">
                    {contactTexts.subTitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="row contact-info">
              <div className="ml-auto col-lg-4 mt-5">
                <div className="text-center">
                  <div className="base-color">
                    <i className="lni-phone-handset size-md" />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-dark mb-0">{contactTexts.callMe}</h5>
                    <small className="text-muted">
                      {contactTexts.callMeValue}
                    </small>
                  </div>
                </div>
              </div>
              {/*<div className="col-lg-4 mt-5">*/}
              {/*  <div className="text-center">*/}
              {/*    <div className="base-color">*/}
              {/*      <i className="lni-skype size-md" />*/}
              {/*    </div>*/}
              {/*    <div className="mt-3">*/}
              {/*      <h5 className="text-dark mb-0 contact_detail-title">*/}
              {/*        {contactTexts.addMeOnSkype}*/}
              {/*      </h5>*/}
              {/*      <small className="text-muted">dileta.de.bellis</small>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="col-lg-4 mt-5 mr-auto">
                <div className="text-center">
                  <div className="base-color">
                    <i className="lni-pointer size-md" />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-dark mb-0">{contactTexts.emailMe}</h5>
                    <small className="text-muted">
                      hello@dilettadebellis.it
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-5 contact-form">
                <form id="contactForm" onSubmit={sendMessage}>
                  <div className="row">
                    <div className="col-lg-6 form-item">
                      <div className="form-group">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder={contactTexts.name}
                          value={name}
                          onChange={(e) => handleChange(e, setName)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 form-item">
                      <div className="form-group">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder={contactTexts.email}
                          value={email}
                          onChange={(e) => handleChange(e, setEmail)}
                        />
                      </div>
                    </div>
                    <div className="col-12 form-item">
                      <div className="form-group">
                        <input
                          name="subject"
                          id="subject"
                          type="text"
                          className="form-control"
                          placeholder={contactTexts.subject}
                          value={subject}
                          onChange={(e) => handleChange(e, setSubject)}
                        />
                      </div>
                    </div>
                    <div className="col-12 form-item">
                      <div className="form-group">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder={contactTexts.message}
                          value={message}
                          onChange={(e) => handleChange(e, setMessage)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mt-4 text-left">
                      <div className="button-border">
                        <a
                          role="button"
                          type="submit"
                          onClick={(e) => sendMessage(e)}
                          className="pill-button"
                          id="submit-btn"
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm" />{" "}
                              Loading..
                            </>
                          ) : (
                            contactTexts.sendMessage
                          )}
                        </a>
                      </div>
                      <div className="contact-message d-inline-block base-color ml-3">
                        {statusMessage}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContact;

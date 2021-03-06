import React from "react";
import LangSkillItem from "../LangSkillItem";
import Footer from "../Footer";
import useGlobalState from "../../lib/globalState";

function HeroResume() {
  const { texts } = useGlobalState();
  const resumeTexts = texts.global.heroResume;
  const skillsTexts = texts.skills;
  const education = texts.education.education;
  const experiences = texts.experiences.experiences;

  return (
    <section id="resume" className="resume">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    {resumeTexts.titleWhite}{" "}
                    <span className="base-color">{resumeTexts.titlePink}</span>
                  </h2>
                  <p className="text-muted max-width-450 mb-5">
                    {resumeTexts.subTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="text-dark">
                  <i className="lni-graduation base-color" />
                  {resumeTexts.education}
                </h3>
                <div className="timeline-items box-border">
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-icon" />
                      <div className="timeline-contents">
                        <div className="time-line-header">
                          <h6 className="timeline-title">{edu.name}</h6>
                          <p className="timeline-year">
                            {edu.started} - {edu.completed}
                          </p>
                        </div>
                        <div className="timeline-content">
                          <p>{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <h3 className="text-dark">
                  <i className="lni-pencil base-color" />
                  {resumeTexts.experience}
                </h3>
                <div className="timeline-items box-border">
                  {experiences.map((exp, index) => (
                    <div className="timeline-item">
                      <div className="timeline-icon" />
                      <div className="timeline-contents">
                        <div className="time-line-header">
                          <h6 className="timeline-title">{exp.name}</h6>
                          <p className="timeline-year">
                            {exp.started} - {exp.completed}
                          </p>
                        </div>
                        <div className="timeline-content">
                          <p>{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div>
                  <h3 className="mb-0">
                    {resumeTexts.work}{" "}
                    <span className="base-color">
                      {" "}
                      {resumeTexts.workSkills}
                    </span>
                  </h3>
                </div>
                <div id="skills" className="skill-box box-border">
                  {skillsTexts.workSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="skillbar clearfix"
                      data-percent={`${skill.value}%`}
                    >
                      <div className="skillbar-title">
                        <span>{skill.name}</span>
                      </div>
                      <div className="skillbar-bar fill-skillbar" />
                      <div className="skill-bar-percent">{skill.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h3 className="mb-0 mt-5 mt-lg-0">
                    {resumeTexts.lang}{" "}
                    <span className="base-color">
                      {" "}
                      {resumeTexts.langSkills}
                    </span>
                  </h3>
                </div>
                <div className="language-bar box-border">
                  {skillsTexts.languageSkills.map((skill, index) => (
                    <LangSkillItem
                      name={skill.name}
                      comment={skill.comment}
                      value={skill.value}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroResume;

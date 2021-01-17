import React from "react";
import { experiences } from "../../data/experiences";
import { educations } from "../../data/educations";
import { workSkills, languageSkills } from "../../data/skills";
import LangSkillItem from "../LangSkillItem";

function HeroResume() {
  return (
    <section id="resume" className="resume">
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center title">
                  <h2 className="text-dark">
                    My <span className="base-color">Resume</span>
                  </h2>
                  <p className="text-muted max-width-450 mb-5">
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="text-dark">
                  <i className="lni-graduation base-color" />
                  Education
                </h3>
                <div className="timeline-items box-border">
                  {educations.map((edu, index) => (
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
                  Experience
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
                    Work <span className="base-color"> Skills</span>
                  </h3>
                </div>
                <div id="skills" className="skill-box box-border">
                  {workSkills.map((skill, index) => (
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
                    Language <span className="base-color"> Skills</span>
                  </h3>
                </div>
                <div className="language-bar box-border">
                  {languageSkills.map((skill, index) => (
                    <LangSkillItem
                      name={skill.name}
                      comment={skill.comment}
                      value={skill.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroResume;

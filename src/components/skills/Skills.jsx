import React from 'react';
import "./skills.css"
import Frontend from './Frontend';
import Design from './Design';
import Language from './Language';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
          <h2 className="section__title">
              Skills
          </h2>
          <span className="section__subtitle">
              My technical level
          </span>

        <div className="skills__container container grid">
            <Frontend />
            <Design />
            <Language />
        </div>
    </section>
  );
};

export default Skills;
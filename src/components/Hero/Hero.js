import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi ! <br />
        I'm Joshua Munganga
      </SectionTitle>
      <SectionText>
        Full Stack Software Engineer, Skilled in JavaScript and PHP <br />
        I work with the MERN stack, Laravel, Next.js, Serverless Architecture, MySQL, PostgreSQL <br />
        <small>
          <Link href="./resume/Joshua-Munganga.pdf" style={{ color: "white", marginTop: "16px", textDecoration: "none" }}>My Resume</Link>
        </small>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
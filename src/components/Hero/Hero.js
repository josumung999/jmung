import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { AiOutlineFilePdf } from 'react-icons/ai';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi ! <br />
        I'm Joshua Munganga
      </SectionTitle>
      <SectionText>
        Full Stack Software Engineer, Skilled in JavaScript and PHP <br />
        React.js and Redux, Laravel, Node.js/Express, Next.js, MongoDB, MySQL <br />
      </SectionText>
      <small  style={{ color: "#cecece", fontSize: "14px", marginBottom: "24px", lineHeight:"normal" }}>
        An introvert guy but comfortable working in team, lead student groups and communities at the University.
        Also a serial entrepreneur in startups and service based businesses. <br />
      </small>
      <Link href="./resume/Joshua-Munganga.pdf" style={{ marginTop: "32px",  }} passHref>
        <small  style={{ color: "#cecece", textDecoration: "underline" }}>
          <AiOutlineFilePdf /> My Resume
        </small>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
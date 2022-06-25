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
        I work with the MERN stack, Laravel, Next.js, Serverless Architecture, MySQL, PostgreSQL <br />
        <Link href="./resume/Joshua-Munganga.pdf">
          <small  style={{ color: "#cecece", marginTop: "32px", textDecoration: "underline" }}>
          <AiOutlineFilePdf /> My Resume
          </small>
        </Link>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
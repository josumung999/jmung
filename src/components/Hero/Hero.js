import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There ! <br />
        I'm Joshua
      </SectionTitle>
      <SectionText>
        Full Stack Software Engineer, aiming to build computer based solutions to real life problems
      </SectionText>
      <Link href='./resume/Josue-Munganga.pdf' target='blank'>
        <Button>My Resume</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
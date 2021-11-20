import React from 'react';

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
      <Button onClick={() => window.Location = 'https://github.com/josumung999'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
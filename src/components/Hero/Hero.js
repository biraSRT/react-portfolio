import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
      My name is Tony Jos Biraje. I am a Web developer located in the Montreal area and this my porfolio.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
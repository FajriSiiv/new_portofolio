import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
        I am an Frontend Developer that has a passion for design and technology.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;

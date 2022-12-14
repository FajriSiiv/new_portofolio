import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "10+", text: "Open Source Projects" },
  { number: "100+", text: "Github Repositories" },
  { number: "3 Years", text: "as a Frontend Developer" },
  { number: "5+", text: "Certification Online Bootcamp" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievement</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

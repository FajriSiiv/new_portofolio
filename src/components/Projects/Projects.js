import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import {
  FlexContainer,
  Card,
  Title,
  Desc,
  Tags,
  DivTags,
  LinkS,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <FlexContainer>
      {projects.map(({ id, image, title, desc, tags, source, visit }) => (
        <Card key={id}>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <DivTags>
            {tags.map((e) => (
              <Tags key={e}>{e}</Tags>
            ))}
          </DivTags>
          <DivTags>
            <LinkS target="_blank" href={visit}>
              <HiOutlineExternalLink />
            </LinkS>
            <LinkS target="_blank" href={source}>
              <FaGithub />
            </LinkS>
          </DivTags>
        </Card>
      ))}
    </FlexContainer>
  </Section>
);

export default Projects;

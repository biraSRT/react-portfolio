import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNpm, DiJavascript1, DiCss3, DiMongodb} from 'react-icons/di';
import { AiFillHtml5 } from "react-icons/ai";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { GrNode } from "react-icons/gr";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here is a list of Technologies I have worked with so far.<br/>
      My knowledge is of course not limited to any of these technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillHtml5 size="3rem"/> 
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem"/> 
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS3 and SASS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GrNode size="3rem"/> 
        <ListContainer>
          <ListTitle>Node</ListTitle>
          <ListParagraph>
            Currently Learning <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem"/> 
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph>
            Currently Learning <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

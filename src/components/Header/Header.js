import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, aTag1 } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <Link href="/">
          <aTag1>
            <DiCode size = "3rem" /> <Span>Biraje.tech</Span>
          </aTag1>
        </Link>
    </Div1>
    <Div2>
        {/* <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/biraSRT" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tony-jos-biraje-953b52220/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

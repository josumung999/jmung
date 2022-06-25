import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { Container, Div1, Div3, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
            <Span>@jmung_dev</Span>
          </a>
        </Link>
      </Div1>
      <Div3>
        <SocialIcons href="https://github.com/josumung999" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/josu%C3%A9-munganga/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/JosuMunganga1" target="_blank">
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/jmung_dev" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;

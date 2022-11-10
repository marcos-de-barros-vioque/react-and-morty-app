import React from 'react';
import styled from "styled-components";

export default function NavBar() {
    return (
    <StyledNavBar>
          <li>
              <a href="#home">Home
              </a>
          </li>
          <li>
              <a href="#favorites">Favorites
              </a>
          </li>
          <li>
              <a href="#random">Random
              </a>
          </li>
          <li>
              <a href="#other">Other
              </a>
          </li>
    </StyledNavBar>
    );
  }

  const StyledNavBar = styled.ul`
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 10px;

    li {
    list-style-type: none;
    display: inline;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
    }
    `

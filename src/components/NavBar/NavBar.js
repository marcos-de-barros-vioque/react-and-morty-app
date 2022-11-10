import React from 'react';
import styled from "styled.components";

export default function NavBar() {
    return (
    <StyledNavBar>
        <ul>
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
        </ul>
    </StyledNavBar>
    );
  }

  const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-top: 30px;
    padding-bottom: 10px;

    ul li {
    list-style-type: none;
    display: inline;
    margin-left: 50px;
    margin-right: 50px;
    }
    `

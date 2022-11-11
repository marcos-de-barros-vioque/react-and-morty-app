import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
    <StyledNavBar>
        <nav>
        <ul>
          <li>
              <Link to="/">Home
              </Link>
          </li>
          <li>
              <Link to="/favorites">Favorites
              </Link>
          </li>
          <li>
              <Link to="/random">Random
              </Link>
          </li>
        </ul>
        </nav>
    </StyledNavBar>
    );
  }

  const StyledNavBar = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  & nav > ul {
    display: flex;
    justify-content: space-between;
  }
  & nav > ul > li {
    list-style-type: none;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
  }
    `
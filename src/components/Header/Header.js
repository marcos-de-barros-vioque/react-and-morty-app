import React from 'react';
import styled from "styled.components";

export default function Header() {
    return (
    <StyledHeader>
    <h1>Rick and Morty</h1>;
    </StyledHeader>
    );
  }

  const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: #3A1772;
  width:  100vw;
  padding: 15px;
`
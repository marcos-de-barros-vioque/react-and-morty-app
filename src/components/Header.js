import React from 'react';
import styled from "styled-components";

export default function Header() {
    return (
    <StyledHeader>
    <h1>Rick and Morty</h1>;
    </StyledHeader>
    );
  };

  const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: red;
  width:  100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
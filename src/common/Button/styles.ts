import styled from "styled-components";

export const StyledButton = styled.button<{ color?: string }>`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  overflow: hidden; /* Ensure the gradient stays inside the button */
  transition: color 0.3s, background 0.3s, border 0.3s;

  /* Create the sliding background effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 130, 92);
    transition: left 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
  }

  /* Slide the background in on hover */
  &:hover::before {
    left: 0;
  }
`;
  
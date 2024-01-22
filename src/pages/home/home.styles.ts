import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  video {
    display: block;
    height: 100%;
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
    object-position: 50%;
    aspect-ratio: 16 / 9;
    background-color: #000000;
  }

  button {
    display: block;
    border: none;
    background-color: #eb1d23;
    color: #ffffff;
    margin: 1em;
    padding: 1em;
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: #eb1d23;
    }
  }
`;

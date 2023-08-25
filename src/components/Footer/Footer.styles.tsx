import { styled } from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  gap: 10px;
  flex-direction: column;
  background-color: #0a151e;
  position: fixed;
  bottom: 0;
  width: 100vw;
  p {
    color: #fff;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  img {
    max-width: 80px;
  }
`;

import { styled } from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
`;

export const Content = styled.div`
  border: solid 2px #000;
  background: #fff;
  color: #000;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  gap: 20px;
  text-align: center;

  div {
    display: flex;
    gap: 20px;
  }
`;

export const ButtonCancel = styled.button`
  background-color: #808080;
  color: #fff;
  padding: 8px 12px;
  border: 5px;
`;

export const ButtonDelete = styled.button`
  background-color: #990f02;
  color: #fff;
  padding: 8px 12px;
  border: 5px;
`;

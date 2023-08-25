import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  padding: 10px 10px 0px 10px;
  border: solid 1px #e2e8e9;
  margin: 25px;
`;

export const Content = styled.div`
  padding: 0 0px;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;

  p {
    margin-left: 11px;
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ContentSubItem = styled.div``;

export const DragIcon = styled.img`
  justify-self: start;
`;
export const TrashIcon = styled.img`
  justify-self: end;
  margin-right: 20px;
  cursor: pointer;
`;

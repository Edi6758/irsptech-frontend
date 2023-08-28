import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  padding: 10px 10px 0px 10px;
  border: solid 1px #e2e8e9;
  margin: 25px;
`;

export const Content = styled.div`
  padding: 5px 0px;
  display: grid;
  grid-template-columns: 1fr 4fr 5fr 1fr 1fr;
  align-items: center;
  border-bottom: solid 1px #e2e8e9;

  p {
    margin-left: 11px;
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 576px) {
    p {
      max-width: 110px;
      overflow-x: hidden;
    }
    p::after {
      content: "...";
    }
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

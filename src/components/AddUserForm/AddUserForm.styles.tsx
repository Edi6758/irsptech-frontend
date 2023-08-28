import { styled } from "styled-components";

export const FormTitle = styled.h1`
  padding: 20px;
  font-weight: 600;
  font-size: 24px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1150px;
  width: 100%;
  padding: 20px;

  input {
    border: 1px solid #e2e8e9;
    border-radius: 4px;
    height: 35px;
  }

  label {
    font-weight: 600;
  }

  p {
    color: #f00;
  }

`;

export const ContentButton = styled.div`
  display: flex;
  margin: 30px auto;
  gap: 20px;
`;

export const AddButton = styled.button`
    background-color: #32CD32;
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
`;
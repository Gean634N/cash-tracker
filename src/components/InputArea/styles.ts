import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  box-shadow: 0 0 5px #bbb;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`;

export const Button = styled.button`
  flex: 1;
  background-color: #87CEEB;
  border: 1px solid #87CEEB;
  border-radius: 5px;
  padding: 7px 0;
`;

export const Input = styled.div`
  label {
    margin-bottom: 3px;
  }
  input {
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 7px;
    width: 100%;
  }
`;

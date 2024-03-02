import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s background ease-in;
    font-size: 16px;
  }
`;

const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
    transition: 0.3s background ease-in;
    font-size: 16px;
  }
`;

export default OutlineButton;

import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.style";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  text-decoration: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

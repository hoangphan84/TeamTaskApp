import styled from "styled-components";
import React from "react";

const CrossMark = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
  background-color: Transparent;
  border: none;
  margin-left: 1em;
  outline: none;
  z-index: 10;
  cursor: pointer;
`;

const CrossMarkCircle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  left: 0;
  top: 0;
`;

const CrossMarkLeft = styled.div`
  position: absolute;
  width: 13px;
  height: 3px;
  background-color: #fff;
  left: 9px;
  top: 13px;
`;

const CrossMarkLeftHalf = styled.div`
  position: absolute;
  width: 6px;
  height: 3px;
  background-color: #fff;
  left: 10px;
  top: 18px;
`;

const CrossMarkRight = styled.div`
  position: absolute;
  width: 3px;
  height: 13px;
  background-color: #fff;
  left: 14px;
  top: 8px;
`;

export interface ActionProps {
  onClick: () => void;
}

export const DeleteButton: React.FC<ActionProps> = (props) => {
  return (
    <CrossMark {...props} id="actionBtn">
      <CrossMarkCircle id="actionBtn" color="red"></CrossMarkCircle>
      <CrossMarkLeft id="actionBtn"></CrossMarkLeft>
      <CrossMarkRight id="actionBtn"></CrossMarkRight>
    </CrossMark>
  );
};

export const CompleteButton: React.FC<ActionProps> = (props) => {
  return (
    <CrossMark {...props} id="actionBtn">
      <CrossMarkCircle id="actionBtn" color="green"></CrossMarkCircle>
      <CrossMarkLeftHalf id="actionBtn"></CrossMarkLeftHalf>
      <CrossMarkRight id="actionBtn"></CrossMarkRight>
    </CrossMark>
  );
};

// export default DeleteButton, CompleteButton;

import styled from "styled-components";
import React from "react";

const CrossMark = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  -ms-transform: ${(props) =>
    props.itemType?.indexOf("add") === -1 ? "rotate(45deg)" : "rotate(90deg)"};
  -webkit-transform: ${(props) =>
    props.itemType?.indexOf("add") === -1 ? "rotate(45deg)" : "rotate(90deg)"};
  transform: ${(props) =>
    props.itemType?.indexOf("add") === -1 ? "rotate(45deg)" : "rotate(90deg)"};
  background-color: Transparent;
  border: none;
  outline: none;
  z-index: 10;
  cursor: pointer;
`;

const CrossMarkCircle = styled.div`
  position: absolute;
  width: ${(props) => (props.itemType === "add-big" ? "45px" : "30px")};
  height: ${(props) => (props.itemType === "add-big" ? "45px" : "30px")};
  background-color: ${(props) =>
    props.itemType === "delete"
      ? "#f25d5d"
      : props.itemType === "complete"
      ? "#74e474"
      : "#ffb225"};
  border-radius: ${(props) => (props.itemType === "add-big" ? "24px" : "16px")};
  left: 0;
  top: 0;
  trans
`;

const CrossMarkLeft = styled.div`
  position: absolute;
  width: ${(props) =>
    props.itemType === "complete"
      ? "7px"
      : props.itemType === "add-big"
      ? "19px"
      : "13px"};
  height: 3px;
  background-color: #fff;
  left: ${(props) =>
    props.itemType === "complete"
      ? "11px"
      : props.itemType === "add-big"
      ? "13px"
      : "9px"};
  top: ${(props) =>
    props.itemType === "complete"
      ? "17px"
      : props.itemType === "add-big"
      ? "20px"
      : "13px"};
`;

const CrossMarkRight = styled.div`
  position: absolute;
  width: 3px;
  height: ${(props) =>
    props.itemType === "complete"
      ? "10px"
      : props.itemType === "add-big"
      ? "19px"
      : "13px"};
  background-color: #fff;
  left: ${(props) =>
    props.itemType === "complete"
      ? "15px"
      : props.itemType === "add-big"
      ? "21px"
      : "14px"};
  top: ${(props) =>
    props.itemType === "complete"
      ? "7px"
      : props.itemType === "add-big"
      ? "12px"
      : "8px"};
`;

export interface ActionProps {
  onClick: () => void;
  type?: string;
}

export const ActionButton: React.FC<ActionProps> = ({ type, ...props }) => {
  return (
    <CrossMark {...props} itemType={type} id="actionBtn">
      <CrossMarkCircle id="actionBtn" itemType={type}></CrossMarkCircle>
      <CrossMarkLeft id="actionBtn" itemType={type}></CrossMarkLeft>
      <CrossMarkRight id="actionBtn" itemType={type}></CrossMarkRight>
    </CrossMark>
  );
};

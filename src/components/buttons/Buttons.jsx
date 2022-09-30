import styled from "styled-components";

export const Buttons = ({ size, useType, content }) => {
  let buttonSize = [];
  let buttonType = "";
  if (size === "overSize") {
    buttonSize = [150, 50, 1.3];
  }
  if (size === "middle") {
    buttonSize = [100, 40, 1.1];
  }
  if (size === "small") {
    buttonSize = [80, 30, 0.8];
  }
  if (useType === "main") {
    buttonType = "#FFF455";
  }
  if (useType === "cancel") {
    buttonType = "#FFF88C";
  }
  if (useType === "warning") {
    buttonType = "#FFBD13";
  }
  if (useType === "etc") {
    buttonType = "#FFDB5A";
  }

  return (
    <PersonalBtns
      style={{
        width: `${buttonSize[0]}px`,
        height: `${buttonSize[1]}px`,
        fontSize: `${buttonSize[2]}rem`,
        backgroundColor: buttonType,
      }}
    >
      {content}
    </PersonalBtns>
  );
};

const PersonalBtns = styled.button`
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    color: white;
    background-color: black;
    box-shadow: 1px 1px 3px 1px black;
  }
`;

import styled from "styled-components";

export const Inputs = ({ type, size, useType, placeholder,defaultValue,onChange }) => {
  let inputSize = [];
  let inputType = "";
  if (size === "small") {
    inputSize = [150, 30, 0.8];
  }
  if (size === "middle") {
    inputSize = [300, 40, 1.1];
  }
  if (size === "large") {
    inputSize = [450, 50, 1.3];
  }
  if (useType === "main") {
    inputType = "#FFF455";
  }
  if (useType === "cancel") {
    inputType = "#FFF88C";
  }
  if (useType === "warning") {
    inputType = "#FFBD13";
  }
  if (useType === "etc") {
    inputType = "#FFDB5A";
  }

  return (
    <PersonalInput
      style={{
        width: `${inputSize[0]}px`,
        height: `${inputSize[1]}px`,
        fontSize: `${inputSize[2]}rem`,
        borderColor: inputType,
      }}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

const PersonalInput = styled.input`
    border-radius:10px;
    border: 1px solid #FFF88C;
    padding:5px;
    padding-left:20px;

  &:focus {
    outline-color: #FFF88C;
  }
`;

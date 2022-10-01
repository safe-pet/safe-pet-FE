import styled from "styled-components";

export const Buttons = ({ size, useType, content }) => {
  if (useType === "main") {
    if (size === "overSize") {
      return (
        <BtnWrapSpan>
          <OverSize className="main" type="button">
            {content}
          </OverSize>
        </BtnWrapSpan>
      );
    }
    if (size === "middle") {
      return (
        <BtnWrapSpan>
          <MiddleSize className="main" type="button">
            {content}
          </MiddleSize>
        </BtnWrapSpan>
      );
    }
    if (size === "small") {
      return (
        <BtnWrapSpan>
          <SmallSize className="main" type="button">
            {content}
          </SmallSize>
        </BtnWrapSpan>
      );
    }
  }
  if (useType === "cancel") {
    if (size === "overSize") {
      return (
        <BtnWrapSpan>
          <OverSize className="cancel" type="button">
            {content}
          </OverSize>
        </BtnWrapSpan>
      );
    }
    if (size === "middle") {
      return (
        <BtnWrapSpan>
          <MiddleSize className="cancel" type="button">
            {content}
          </MiddleSize>
        </BtnWrapSpan>
      );
    }
    if (size === "small") {
      return (
        <BtnWrapSpan>
          <SmallSize className="cancel" type="button">
            {content}
          </SmallSize>
        </BtnWrapSpan>
      );
    }
  }
  if (useType === "warning") {
    if (size === "overSize") {
      return (
        <BtnWrapSpan>
          <OverSize className="warning" type="button">
            {content}
          </OverSize>
        </BtnWrapSpan>
      );
    }
    if (size === "middle") {
      return (
        <BtnWrapSpan>
          <MiddleSize className="warning" type="button">
            {content}
          </MiddleSize>
        </BtnWrapSpan>
      );
    }
    if (size === "small") {
      return (
        <BtnWrapSpan>
          <SmallSize className="warning" type="button">
            {content}
          </SmallSize>
        </BtnWrapSpan>
      );
    }
  }
  if (useType === "etc") {
    if (size === "overSize") {
      return (
        <BtnWrapSpan>
          <OverSize className="etc" type="button">
            {content}
          </OverSize>
        </BtnWrapSpan>
      );
    }
    if (size === "middle") {
      return (
        <BtnWrapSpan>
          <MiddleSize className="etc" type="button">
            {content}
          </MiddleSize>
        </BtnWrapSpan>
      );
    }
    if (size === "small") {
      return (
        <BtnWrapSpan>
          <SmallSize className="etc" type="button">
            {content}
          </SmallSize>
        </BtnWrapSpan>
      );
    }
  }

  return <OverSize type="button">{content}</OverSize>;
};

const BtnWrapSpan = styled.span`
  & .main {
    background-color: #fff455;
  }
  & .cancel {
    background-color: #fff88c;
  }
  & .warning {
    background-color: #ffbd13;
  }
  & .etc {
    background-color: #ffdb5a;
  }
`;

const OverSize = styled.button`
  width: 150px;
  height: 50px;
  font-size: 1.3rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: #ffbd13;
  }
`;
const MiddleSize = styled.button`
  width: 100px;
  height: 40px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: #ffbd13;
  }
`;
const SmallSize = styled.button`
  width: 80px;
  height: 30px;
  font-size: 0.8rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: #ffbd13;
  }
`;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  const navigate = useNavigate();

  let someData = {
    name: "hihi",
    value: "here",
  };
  return (
    <FooterSet>
      footer
      <div onClick={() => navigate(`/mypage`, { state: someData })}>
        테스트에옹
      </div>
    </FooterSet>
  );
};

const FooterSet = styled.div`
  margin-top: 120px;
  position: absolute;
`;

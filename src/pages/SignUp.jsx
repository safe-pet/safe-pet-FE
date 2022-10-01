import styled from "styled-components";
import { OwnerJoin } from "../components/signUpTab/OwnerJoin";
import { PersonalJoin } from "../components/signUpTab/PersonalJoin";

export const SignUp = () => {
  return (
    <LoginContainer>
      <LogoBox>
        <MainLogo
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIgTs9%2FbtrNoKW1lWz%2FWq4Nhu3yWUs39ljni5VIN1%2Fimg.png"
          alt=""
        />
      </LogoBox>
      <SignUpMenu>
        <SignUpButtons>
          <JoinButton>회원가입(일반)</JoinButton>
          <JoinButton>피분양자 회원가입(사업자)</JoinButton>
        </SignUpButtons>
      </SignUpMenu>
      <OwnerJoin />
      {/* <PersonalJoin /> */}
      </LoginContainer>
      
  );
};

const LoginContainer = styled.div`
  margin: auto;
  margin-top: 8vw;
  margin-bottom: 12vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;

  border-radius: 20px;
  box-shadow: 3px 3px 5px 3px #fff455;
`;

const LogoBox = styled.div`
  cursor: pointer;
`;
const MainLogo = styled.img`
  width: 300px;
  height: 220px;
  margin: 30px;
`;

const SignUpMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;

  & ul,
  li {
    list-style: none;
  }
`;
const SignUpButtons = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 10px;

  background-color: #ffdb5a;
  & li:first-child {
    border-radius: 10px 0 0 10px;
    border-right: 1px solid #c4c4c4;
  }
  & li:last-child {
    border-radius: 0 10px 10px 0px;
  }
`;
const JoinButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 40px;
  font-size: 0.8rem;
  background-color: #ffdb5a;

  border: none;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: #ffbd13;
  }
`;
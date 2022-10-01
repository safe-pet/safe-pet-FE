import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Buttons } from "../useInForm/Buttons";

export const Header = () => {
  const navigate = useNavigate();

  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <HeaderSection>
      {isLogedIn === false ? (
        <SignUpMenu>
          <SignUpButtons>
            <JoinButton
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </JoinButton>
            <JoinButton
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </JoinButton>
          </SignUpButtons>
        </SignUpMenu>
      ) : (
        <LogedNav>
          <AlertImg
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdeuuO5%2FbtrNwGz1E41%2FJEpzovQ5qxqlMh8veCF75k%2Fimg.png"
            alt="https://icons8.com/icon/123441/favorites icon by https://icons8.com Icons8"
          />
          <ScrapImg
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZ1F2H%2FbtrNv1dz1CN%2FfsUP1e0HXOryUy9rfjlP40%2Fimg.png"
            alt="https://icons8.com/icon/123441/favorites icon by https://icons8.com Icons8"
          />
          <Buttons size="small" useType="etc" content="마이페이지" />
          <Buttons size="small" useType="etc" content="로그아웃" />
        </LogedNav>
      )}

      <LogoBox onClick={()=>{navigate("/")}}>
        <LogoImage
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIgTs9%2FbtrNoKW1lWz%2FWq4Nhu3yWUs39ljni5VIN1%2Fimg.png"
          alt="main-LOGO"
        />
      </LogoBox>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  height: 300px;
  padding: 30px;

  background-color: #fff88c;
`;

const SignUpMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

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

  width: 80px;
  height: 30px;
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

const LogedNav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  & button:first-child {
    margin-right: 20px;
  }
  animation: LogedNavFadein 1s;
  & {
    @keyframes LogedNavFadein {
      from {
        opacity: 0;
        width: 95%;
      }
      to {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;
const AlertImg = styled.img`
  margin-right: 20px;
  width: 40px;
  height: 40px;

  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  transition: 0.6s;
  &:hover {
    background-color: #fff88c;
  }
`;
const ScrapImg = styled.img`
  margin-right: 20px;
  width: 40px;
  height: 40px;

  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  transition: 0.6s;
  &:hover {
    background-color: #fff88c;
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;
const LogoImage = styled.img`
  width: 450px;
  height: 250px;
  border-radius: 20px;
  cursor: pointer;

  animation: headerFadein 0.8s;
  & {
    @keyframes headerFadein {
      from {
        height: 0;
        opacity: 0;
      }
      to {
        height: 250px;
        opacity: 1;
      }
    }
  }
`;

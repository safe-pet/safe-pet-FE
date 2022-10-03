import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Buttons } from "../components/useInForm/Buttons";
import { Inputs } from "../components/useInForm/Inputs";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <LogoBox 
      onClick={()=>{navigate("/")}}>
        <MainLogo
        
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIgTs9%2FbtrNoKW1lWz%2FWq4Nhu3yWUs39ljni5VIN1%2Fimg.png"
          alt=""
        />
      </LogoBox>
      <LoginForm>
        <InputWrap>
          <Inputs
            size="middle"
            useType="main"
            type="text"
            placeholder="이메일을 입력해주세요!"
          />
          <p></p>
        </InputWrap>
        <InputWrap>
          <Inputs
            size="middle"
            useType="main"
            type="password"
            placeholder="비밀번호를 입력해주세요!"
          />
          <p></p>
        </InputWrap>
        <ButtonsWrap>
          <Buttons size="middle" useType="main" content="로그인" />
          <div onClick={()=>{navigate("/signup")}}>
            <Buttons size="middle" useType="cancel" content="회원가입" />
          </div>
        </ButtonsWrap>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: auto;
  margin-top: 12vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 600px;

  border-radius: 20px;
  box-shadow: 3px 3px 5px 3px #fff455;
  
  animation: loginFade 0.7s;
  & {
    @keyframes loginFade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const LogoBox = styled.div`
  cursor: pointer;
`;
const MainLogo = styled.img`
  width: 300px;
  height: 220px;
  margin: 30px;
`;

const LoginForm = styled.form``;

const InputWrap = styled.div`
  margin-bottom: 40px;
`;

const ButtonsWrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

import styled from "styled-components"
import { Inputs } from "../../components/useInForm/Inputs";
import { Buttons } from "../../components/useInForm/Buttons";

export const PersonalJoin = () => {


    return(
        <LoginForm>
        <InputWrap>
          <InputAuth>
            <Inputs
              type="text"
              size="middle"
              useType="main"
              placeholder="가입할 Email을 입력해주세요!"
            />
            <Buttons size="small" useType="etc" content="인증하기" />
          </InputAuth>
          <p>인증여부 메세지</p>
        </InputWrap>
        <InputWrap>
          <Inputs
            type="password"
            size="middle"
            useType="main"
            placeholder="비밀번호를 입력해주세요!"
          />
          <p>비밀번호 유효성 메세지</p>
        </InputWrap>
        <InputWrap>
          <Inputs
            type="password"
            size="middle"
            useType="main"
            placeholder="비밀번호 확인!"
          />
          <p>비밀번호 일치 여부 메세지</p>
        </InputWrap>
        <ButtonsWrap>
          <Buttons size="middle" useType="main" content="회원가입" />
          <Buttons size="middle" useType="cancel" content="홈으로" />
        </ButtonsWrap>
      </LoginForm>

    )
}


const LoginForm = styled.form``;

const InputWrap = styled.div`
  margin-bottom: 20px;

  & {
    input {
      margin-right: 15px;
    }
  }
`;

const InputAuth = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ButtonsWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
`;
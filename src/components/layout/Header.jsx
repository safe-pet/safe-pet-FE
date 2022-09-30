import styled from "styled-components";


export const Header = () => {
  return (
    <HeaderSection>
      <SignUpMenu>
        <SignUpButtons>
          <JoinButton>로그인</JoinButton>
          <JoinButton>회원가입</JoinButton>
        </SignUpButtons>
      </SignUpMenu>
      <LogoBox>
        <LogoImage
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIgTs9%2FbtrNoKW1lWz%2FWq4Nhu3yWUs39ljni5VIN1%2Fimg.png"
          alt="main-LOGO"
        />
      </LogoBox>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  height: 270px;
  padding: 30px;

  background-color: #fff88c;
`;

const SignUpMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  & ul,li{
    list-style:none;
  }
`;
const SignUpButtons = styled.ul`
  margin:0;
  padding:0;
  display: flex;
  border-radius:10px;

  background-color: #ffdb5a;
  & li:first-child {
    border-radius: 10px 0 0 10px;
    border-right: 1px solid  #c4c4c4;
  }
  & li:last-child{
    border-radius: 0 10px 10px 0px;
  }
`;
const JoinButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width:80px;
  height:30px;
  font-size:0.8rem;
  background-color:#FFDB5A;

  border: none;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition:0.6s;
  
  &:hover{
    background-color:#FFBD13 ;
  }
`

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

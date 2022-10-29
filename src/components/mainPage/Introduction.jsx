import styled from "styled-components";

export const Introduction = ({ status }) => {
  return (
    <IntroContainer
      style={status !== "사이트소개" ? { display: "none" } : null}
    >
      <IntroImg
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDpCi0%2FbtrNvqSvDw8%2FGr29uQmRxlmUYM5XIY84b1%2Fimg.png"
        alt="메인포스터"
      />
      <p>
        우리 주위에는 버려지는 동물들이 많이 있습니다.
        <br />
        <br />
        혹시 반려동물과 함께해보고 싶다는 생각이 든다면 <br />
        <br />
        사지 말고 입양해 보는건 어떨까요? <br />
        <br />
        <br />
        <br />
      </p>
      <p>
        다른 사람들과 이런저런 이야기를 나누며 소통해도 좋아요! {":)"}
        <br />
        <br />이 사이트는 그런 것들을 위해 존재합니다.
      </p>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: introFadein 0.6s;
  & {
    @keyframes introFadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const IntroImg = styled.img`
  width: 700px;
  height: 700px;
`;

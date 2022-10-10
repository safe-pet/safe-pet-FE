import styled from "styled-components";
import { LayoutSmall } from "../components/layout/LayoutSmall";

export const PostDetail = () => {
  return (
    <LayoutSmall>
      <DetailContainer>
        <DetailWrap>
          <div>게시글 신고하기</div>
          <MainImg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"  alt="메인이미지" />
          <SubImg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"  alt="서브이미지" />
          <div>채팅/지도/스크랩</div>
          <div>
            <div>유저정보</div>
            <div>글수정/삭제/유저 신고하기</div>
          </div>
          <div>
            <div>제목</div>
            <div>내용</div>
          </div>
        </DetailWrap>
      </DetailContainer>
    </LayoutSmall>
  );
};

const DetailContainer = styled.div`
    margin:auto;
  margin-top: 100px;
  display: flex;
  width: 800px;

  box-shadow: 1px 1px 5px 1px #fff455;
`;

const DetailWrap = styled.div`
    
`
const MainImg = styled.img`
`
const SubImg = styled.img`
    
`

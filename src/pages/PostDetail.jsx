import styled from "styled-components";
import { LayoutSmall } from "../components/layout/LayoutSmall";

export const PostDetail = () => {
  return (
    <LayoutSmall>
      <DetailContainer>
        <DetailTop>게시글 신고하기</DetailTop>
        <DetailWrap>
          <MainImgWrap>
            <MainImg
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
              alt="메인이미지"
            />
          </MainImgWrap>
          <SubImgWrap>
            <SubImg
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
              alt="서브이미지"
            />
            <SubImg
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
              alt="서브이미지"
            />
            <SubImg
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
              alt="서브이미지"
            />
          </SubImgWrap>
          <span>사진을 누르면 지워져요!</span>
          <IconsWrap>
            <img src="" alt="채팅" />
            <img src="" alt="지도" />
            <img src="" alt="스크랩" />
          </IconsWrap>
          <hr />
          <PostInfo>
            <UserInfo>
              <img src="" alt="프로필" />
              <SubInfo>
                <div>닉네임</div>
                <div>지역</div>
              </SubInfo>
              <div>몇 분 전</div>
            </UserInfo>
            <UserOptions>
              <span>글수정</span>
              <span>글삭제</span>
              <span>유저 신고하기</span>
            </UserOptions>
          </PostInfo>
          <hr />
          <PostBody>
            <div>제목</div>
            <div>내용</div>
          </PostBody>
        </DetailWrap>
      </DetailContainer>
    </LayoutSmall>
  );
};

const DetailContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 800px;

  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px #fff455;
`;

const DetailTop = styled.span`
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

const DetailWrap = styled.div`
  margin: auto;
  margin-top:30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const MainImgWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const MainImg = styled.img`
  width: 300px;
`;

const SubImgWrap = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px 80px;
  grid-gap:20px;
`;  

const SubImg = styled.img`
  margin-bottom: 30px;
  width: 80px;
  height: 80px;
`;

const IconsWrap = styled.div`
  margin-top:50px;
  margin-bottom:50px;
`;

const PostInfo = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`;
const UserInfo = styled.div`
  display: flex;
`;
const SubInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const UserOptions = styled.div``;

const PostBody = styled.div`
width:100%;
  display: flex;
  flex-direction: column;
`
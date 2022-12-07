import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import { MyPageNav } from "../components/myPage/MyPageNav";
import { MyFeed } from "../components/myPage/MyFeed";
import { MyScrap } from "../components/myPage/MyScrap";
import { MyPosts } from "../components/myPage/MyPosts";

import { useState } from "react";
import { useLocation } from "react-router-dom";

export const MyPage = () => {
  const location = useLocation();
  const [status, setStatus] = useState("내 피드");
  console.log(location);
  const changeStatus = (value) => {
    setStatus(value);
  };

  return (
    <Layout>
      <MyPageContainer>
        <UserInfoHeader>
          <FrofileImg
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
            alt="프로필이미지"
          />
          <UserInfos>세이프펫</UserInfos>
          <UserInfos>deachoungzium@naver.com</UserInfos>
          <UserInfos>한줄 소개</UserInfos>
          <UserInfos>수정하기</UserInfos>
          <UserInfos>
            <div>뱃지</div>
            <span>뱃지는 어떻게 받나요?? - 클릭 시 모달</span>
          </UserInfos>
        </UserInfoHeader>
        <UserInfoBody>
          <MyPageNav status={status} changeStatus={changeStatus} />
          <MyFeed status={status} />
          <MyScrap status={status} />
          <MyPosts status={status} />
        </UserInfoBody>
      </MyPageContainer>
    </Layout>
  );
};

const MyPageContainer = styled.div`
  max-width: 1000px;
  height: 530px;
  margin: auto;
  margin-top: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  border-radius: 20px;
  box-shadow: 1px 1px 4px 1px #fff455;
`;

const UserInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  width: 300px;
`;
const UserInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  width: 350px;
  height: 450px;
`;
const FrofileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  cursor: pointer;
`;

const UserInfos = styled.div`
  margin: 10px 0 10px 0;
  padding: 5px;
`;

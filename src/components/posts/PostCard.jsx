import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TimeToToday } from "../../utils/timeToDate";

import { useCallback,useState,useEffect } from "react";

export const PostCard = ({
  myLocation,
  nickname,
  title,
  content,
  createAt,
}) => {
  
  const navigate = useNavigate();


  return (
    <CardBox
      onClick={() => {
        navigate("/postdetail/1");
      }}
    >
      <ImgBox>
        <PostImg
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
          alt="포스트"
        />
      </ImgBox>
      <CardBody>
        <CardBodyWrap>
          <CardBodyTop>
            <AvaterImg
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbao4eY%2FbtrNlQKKAs6%2F4aPkaIH8mojpCjip5O8KL0%2Fimg.png"
              alt="유저프로필"
            />
            <ContentWrap>
              <PostNickname>{nickname}</PostNickname>
              <PostTitle>{title}</PostTitle>
              <TimeToDate>{TimeToToday(new Date(createAt))}</TimeToDate>
            </ContentWrap>
          </CardBodyTop>
        </CardBodyWrap>
        <Badges>뱃지 등 게이미네이션 자리</Badges>
      </CardBody>
    </CardBox>
  );
};

const CardBox = styled.div`
  margin: 10px;
  padding: 10px;
  width: 270px;
  height: 280px;

  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px gray;
  transition: box-shadow ease-in-out 0.1s;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 7px 1px gray;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
const PostImg = styled.img`
  width: 250px;
  height: 150px;
`;

const CardBody = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const CardBodyWrap = styled.div``;

const CardBodyTop = styled.div`
  padding: 10px;
  display: flex;
`;

const AvaterImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 20px;
`;

const ContentWrap = styled.div``;

const PostTitle = styled.div``;
const PostNickname = styled.div``;
const TimeToDate = styled.span`
  color: gray;
  font-size: 12px;
`;

const Badges = styled.div`
  padding: 5px;
`;

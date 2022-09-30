import styled from "styled-components";

export const PostCard = () => {
  return (
    <CardBox>
      <div>사진</div>
      <div>
        <div>유저 프로필</div>
        <div>제목</div>
        <div>몇 분 전</div>
      </div>

      <div>뱃지 등 게이미네이션 자리</div>
    </CardBox>
  );
};

const CardBox = styled.div`
  margin: 10px;
  padding: 10px;
  width: 270px;
  height: 250px;

  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px gray;
  transition: box-shadow ease-in-out 0.1s;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 7px 1px gray;
  }
`;

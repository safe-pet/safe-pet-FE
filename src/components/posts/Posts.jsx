import styled from "styled-components";

import { PostCard } from "./PostCard";

export const Posts = ({ status }) => {
  return (
    <PostsContainer style={status !== "분양받기" ? { display: "none" } : null}>
      <GridBox>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </GridBox>
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  display: flex;
  justify-content: center;

  animation: postsFadein 1s;
  & {
    @keyframes postsFadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const GridBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 350px 350px 350px 350px;
  grid-gap: 10px;

  &{
    @media all and (max-width:767px) {
      grid-template-columns: 350px 350px
    }
    @media all and (max-width:480px) {
      grid-template-columns: 350px
    }
  }
`;

import styled from "styled-components";

import { PostCard } from "./PostCard";

export const Posts = () => {
  return (
    <PostsContainer>
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
  margin: auto;
  max-width: 1200px;

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
  grid-template-rows: 300px 300px;
  grid-template-columns: 350px 350px 350px 350px;

`;

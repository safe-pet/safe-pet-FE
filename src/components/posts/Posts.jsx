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
      </GridBox>
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  margin: auto;
  max-width: 1200px;
`;

const GridBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-rows: 350px 350px;
  grid-template-columns: 350px 350px 350px 350px;
`;

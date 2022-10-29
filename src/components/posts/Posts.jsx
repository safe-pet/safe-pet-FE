import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPosts } from "../../redux/modules/postSlice";

import axios from "axios";

import { useInView } from "react-intersection-observer";
import { PostCard } from "./PostCard";

export const Posts = ({ status }) => {
  const dispatch = useDispatch();

  // const data = useSelector((state) => state.posts.posts);
  // const newData = [...data][0];
  // console.log(newData);
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  const [isLoading, setIsLoading] = useState(false);

  // infi
  const [posts, setPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(1);
  const [ref, inView] = useInView(true);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3001/posts?_limit=20&_page=${page.current}`
      );
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setHasNextPage(data.length === 20);
      if (data.length) {
        page.current += 1;
      }
    } catch (err) {
      console.error(err);
    }
    setTimeout(() => {
      setIsLoading(false);  
    }, 1500);
    
  }, []);

  useEffect(() => {
    console.log(inView, hasNextPage);
    if (inView && hasNextPage) {
      fetch();
    }
  }, [fetch, hasNextPage, inView]);

  console.log(posts);
  //

  return (
    <PostsContainer style={status !== "분양받기" ? { display: "none" } : null}>
      <GridBox>
        {posts?.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
      </GridBox>
      <div ref={ref} style={{ position: "relative",botton:"5px" }} />
      {isLoading === true ? (
        <div style={{ textAlign: "center" }}>로딩중이에옹</div>
      ) : null}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 20px;
`;

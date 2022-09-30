import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import { MainNav } from "../components/mainPage/MainNav";
import { Posts } from "../components/posts/Posts";

export const Home = () => {
  return (
    <Layout>
      <MainNav />
      <Posts />
    </Layout>
  );
};

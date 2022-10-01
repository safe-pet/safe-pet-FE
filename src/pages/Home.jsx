import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import { MainNav } from "../components/mainPage/MainNav";
import { Posts } from "../components/posts/Posts";
import { Community } from "../components/posts/Community";
import { TipShared } from "../components/mainPage/TipShared";
import { Introduction } from "../components/mainPage/Introduction";

import { useState } from "react";

export const Home = () => {
const [navStatus, setNavStatus] = useState("분양받기");



  return (
    <Layout>
      <MainNav />
      <Posts />
      <Community />
      <TipShared />
      <Introduction />
    </Layout>
  );
};

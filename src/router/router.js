import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { MyPage } from "../pages/MyPage";
import { AddPost } from "../components/posts/AddPost";
import { PostDetail } from "../pages/PostDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/:id" element={<MyPage />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/postdetail/:id" element={<PostDetail />} />
    </Routes>
  );
};

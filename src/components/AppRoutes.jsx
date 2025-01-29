import React from "react";
import PostsList from "../features/posts/PostsList";
import PostDetails from "../features/posts/PostDetails";
import { Route, Routes } from "react-router-dom";
import NewPostForm from "../features/posts/NewPostForm";
import EditPostForm from "../features/posts/EditPostForm";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostsList />}></Route>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
        <Route path="/new" element={<NewPostForm />}></Route>
        <Route path="/posts/:id/edit" element={<EditPostForm />}></Route>
      </Routes>
    </>
  );
}

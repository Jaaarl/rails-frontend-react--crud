import React from "react";
import PostsList from "../features/posts/PostsList";
import PostDetails from "../features/posts/PostDetails";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostsList />}></Route>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
        <Route
          path="/new"
          element={<h1 className="text-3xl">New Post</h1>}
        ></Route>
      </Routes>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";
import PostForm from "./PostForm";

export default function NewPostForm() {
  const navigate = useNavigate();

  const handleSubmit = async (rawData) => {
    const formData = new FormData();
    formData.append("post[title]", rawData.title);
    formData.append("post[body]", rawData.body);
    formData.append("post[image]", rawData.image);
    try {
      const json = await createPost(formData);
      navigate(`/posts/${json.id}`);
    } catch (error) {
      console.error("an error occurred.");
    }
  };
  return (
    <>
      <PostForm
        headerText="Create a new post"
        onSubmit={handleSubmit}
        buttonText="Create post"
      />
    </>
  );
}

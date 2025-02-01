import React from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";
import PostForm from "./PostForm";

export default function NewPostForm() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
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

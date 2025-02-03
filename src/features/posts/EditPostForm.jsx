import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost, showPost } from "../../services/postService";
import PostForm from "./PostForm";

export default function EditPostForm() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await showPost(id);
        setPost(json);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const json = await updatePost(formData, id);
      navigate(`/posts/${id}`);
    } catch (e) {
      console.log("an error occured", e);
    }
  };

  if (!post) return <h2> Loading </h2>;

  return (
    <>
      <PostForm
        post={post}
        headerText="Edit a post"
        onSubmit={handleSubmit}
        buttonText="Update post"
      />
    </>
  );
}

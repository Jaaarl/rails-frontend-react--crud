import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost, showPost } from "../../services/postService";

export default function EditPostForm() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const json = await updatePost(post, id);
      navigate(`/posts/${id}`);
    } catch (e) {
      console.log("an error occured", e);
    }
  };

  if (!post) return <h2> Loading </h2>;

  return (
    <>
      <h2 className="mt-2 text-3xl">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="border mx-2 mt-2"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            type="textarea"
            className="border mx-2 my-2"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-950"
          >
            Edit
          </button>
        </div>
      </form>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants";

export default function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/");
      } else {
        throw response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <h1>loading</h1>;

  return (
    <div className="my-2">
      <h1 className="mb-2 text-3xl">{post.title}</h1>
      <p className="mb-2">{post.body}</p>
      <div className="flex flex-row gap-1">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Posts
        </Link>
        <button
          onClick={deletePost}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
        <Link
          to={`/posts/${post.id}/edit`}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

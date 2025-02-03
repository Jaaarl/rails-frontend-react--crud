import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchAllPosts,
  deletePost as deletePostService,
  showPost,
} from "../../services/postService";
export default function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await showPost(id);
        setPost(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async () => {
    try {
      deletePostService(id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <h1>loading</h1>;

  return (
    <div className="my-2">
      <h1 className="mb-2 text-3xl">{post.title}</h1>
      {post.image_url ? (
        <img src={post.image_url} class="p-2 rounded-lg shadow-sm mb-2" />
      ) : (
        <div class="p-2 w-[200px] h-[200px] rounded-lg shadow-sm mb-2 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
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

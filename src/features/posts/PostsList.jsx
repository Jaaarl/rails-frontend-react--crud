import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";
function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred.");
        console.log("An error occurred:");
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <div key={post.id} className="border">
          <Link to={`posts/${post.id}`}>
            <h2 className="text-2xl">{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <Link to={`posts/${post.id}/edit`}>Edit</Link>
          {" | "}
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

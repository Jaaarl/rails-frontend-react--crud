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

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <Link to={`posts/${post.id}`}>
          <div key={post.id} className="border">
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostsList;

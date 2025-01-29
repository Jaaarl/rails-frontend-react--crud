import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

export default function NewPostForm() {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, body };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const { id } = await response.json();
      navigate(`/posts/${id}`);
    } else {
      console.log("an error occurred.");
    }
  };
  return (
    <>
      <h1 className="mt-2 text-3xl">Create new post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="titleinput"
            type="text"
            value={title}
            className="border mx-2 mt-2"
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            id="bodyinput"
            type="text"
            value={body}
            className="border mx-2 my-2"
            onChange={(e) => setbody(e.target.value)}
          />
        </div>
        <button
          className="mt-3 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-950"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </>
  );
}

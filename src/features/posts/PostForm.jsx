import React, { useState } from "react";

export default function PostForm({ post, headerText, onSubmit, buttonText }) {
  const [formData, setFormData] = useState(
    post || {
      title: "",
      body: "",
    }
  );
  return (
    <>
      <div>{headerText}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            className="border mx-2 mt-2"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            id="body"
            type="text"
            value={formData.body}
            className="border mx-2 my-2"
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
        <button
          className="mt-3 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-950"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </>
  );
}

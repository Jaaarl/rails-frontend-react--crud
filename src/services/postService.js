import { API_URL } from "../constants";

export async function fetchAllPosts() {
  const response = await fetch(`${API_URL}`);
  if (response.ok) return response.json();
  else throw new Error(response.statusText);
}

export async function showPost(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (response.ok) return response.json();
  else throw new Error(response.statusText);
}

export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error(response.statusText);
  if (response.status === 204) return null;
  return response.json();
};

export async function createPost(postData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}

export async function updatePost(post, id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error(response.statusText);
  else return response.json();
}

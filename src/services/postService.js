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

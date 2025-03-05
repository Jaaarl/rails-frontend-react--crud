import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {
    fetchAllPosts,
    deletePost as deletePostService,
} from "../../services/postService";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                const posts = await fetchAllPosts();
                setPosts(posts);
            } catch (error) {
                setError(e);
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    const deletePost = async (id) => {
        try {
            await deletePostService(id);
            setPosts(posts.filter((post) => post.id !== id));
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
                    {post.image_url ? (
                        <img
                            src={post.image_url}
                            class="p-2 rounded-lg shadow-sm mb-2 w-[300px] h-[300px] object-cover"
                        />
                    ) : (
                        <div
                            class="p-2 w-[200px] h-[200px] rounded-lg shadow-sm mb-2 bg-gray-200 flex items-center justify-center text-gray-500">
                            No Image Available
                        </div>
                    )}
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

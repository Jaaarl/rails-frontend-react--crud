import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <div className="px-2 py-1">
        <div className="text-blue-500 text-3xl">
          React + <span className="text-red-700">Rails</span> Blog
        </div>
        <PostsList />
      </div>
    </>
  );
}

export default App;

import PostsCard from "../components/posts/PostsCard";
import { useGetPostsQuery } from "../redux/api/baseApi";

const Latest = () => {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  if (isLoading)
    return <div className="text-amber-400 text-4xl">Loading...</div>;
  if (!isLoading & isError)
    return <div className="text-red-300 text-3xl">Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-center">Latest Update here...</h1>
      <div>{/* <SetPost /> */}</div>

      <div className="flex flex-col gap-3 ">
        {posts?.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Latest;

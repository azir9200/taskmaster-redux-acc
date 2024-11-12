import { useGetPostsByIdQuery } from "../../redux/api/baseApi";
import PostCardById from "./PostCardById";

const PostById = () => {
  const { data: post, isLoading, isError, error } = useGetPostsByIdQuery();

  if (isLoading)
    return <div className="text-amber-400 text-4xl">Loading...</div>;
  if (!isLoading & isError)
    return <div className="text-red-300 text-3xl">Error: {error.message}</div>;

  return (
    <div>
      <h2>Post is display here by Id.. </h2>
      {/* <div>{<PostCardById key={post.id} post={post} />}</div> */}
    </div>
  );
};

export default PostById;

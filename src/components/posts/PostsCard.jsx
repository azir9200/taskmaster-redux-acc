import { Link } from "react-router-dom";

const PostsCard = ({ post }) => {
  return (
    <div className="bg-zinc-800 rounded-md p-10 text-zinc-300 m-4">
      <h1>John Doe</h1>
      <p>{post?.body} </p>
      <Link  to='/postid' className="text-end justify-end text-red-700 text-xl  ">
        see post
      </Link>
    </div>
  );
};

export default PostsCard;

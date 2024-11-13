import { useForm } from "react-hook-form";
import { useSetPostMutation } from "../../redux/api/baseApi";

const SetPost = () => {
  const { register, handleSubmit } = useForm();
  const [setPost, { data: postData }] = useSetPostMutation();

  console.log("object postData", postData);

  //   const onSubmit = (data) => {
  //     setPost(data);
  //   };

  const onSubmit = (data) => {
    setPost({ title: "This is my 1st post", body: data.post, userId: 234 });
  };

  return (
    <div>
      <div className="my-8">
        <form className="flex gap-3 m-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full text-zinc-400 p-3 rounded-md"
            type="text"
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 p-3 border border-zinc-300 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPost;

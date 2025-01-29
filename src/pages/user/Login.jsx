import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/image/login.svg";
import { useLoginMutation } from "../../redux/api/authApi";
import { verifyToken } from "../../redux/features/util";
import { setUser } from "../../redux/features/user/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async ({ email, password }) => {
    try {
      const result = await login({ name, email, password }).unwrap();
      console.log("result login", result);

      const user = verifyToken(result.data.accessToken);
      console.log("user", user);
      dispatch(setUser({ user: user, token: result.data.accessToken }));

      if (result.success && result.data?.accessToken) {
        toast.success(
          <div className="justify-center items-center text-white text-3xl p-22  bg-gradient-to-r from-sky-700 to-yellow-600">
            {" "}
            Your login is successfully!{" "}
          </div>
        );
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  const handleGoogleLogin = () => {
    //  Google Login
  };

  return (
    <div className="flex max-w-7xl h-screen items-center mx-auto">
      <div className="w-1/2">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md"
                {...register("password")}
              />
            </div>
            <div className="relative !mt-8">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
            <div>
              <p>
                Don&apos;t have an account?{" "}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Latest from "../pages/Latest";
import PostById from "../components/posts/PostById";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/latest",
        element: <Latest />,
      },
      {
        path: "/postid",
        element: <PostById />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;

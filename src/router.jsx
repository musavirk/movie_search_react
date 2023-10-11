import Home from "./view/Home";
import { createBrowserRouter } from "react-router-dom";
import Popular from "./view/Popular";
import TopRated from "./view/TopRated";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/popular", element: <Popular /> },
  { path: "/toprated", element: <TopRated /> },
]);
export default router;

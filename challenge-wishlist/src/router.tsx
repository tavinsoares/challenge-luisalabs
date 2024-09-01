import Home from "./pages/Home";
import WishList from "./pages/WishList"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/wishlist",
    element: <WishList />
  }
]);

export const Router = () => <RouterProvider router={router} />

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";



const routes = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },


]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}
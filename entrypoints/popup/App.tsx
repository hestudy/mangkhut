import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Home from "../../src/pages/Home";
import Login from "../../src/pages/Login";
import AuthLayout from "../../src/layouts/AuthLayout";

function App() {
  return (
    <RouterProvider
      router={createMemoryRouter([
        {
          path: "/",
          element: <AuthLayout></AuthLayout>,
          children: [
            {
              index: true,
              element: <Home></Home>,
            },
          ],
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ])}
    ></RouterProvider>
  );
}

export default App;

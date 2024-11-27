import Header from "./layout/Header";
import { Home } from "./Page/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Teachers from "./Page/Teachers";
import { Signin } from "./Page/Signin";
import UserStatus from "./Page/UserStatus";
import Competitions from "./Page/Competitions";
import Table from "./Page/Table";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Signin />,
  },
  {
    path: "/Sigin",
    element:<Signin />,
  },
  {
    path: "/Home",
    element:<Home />,
  },
  {
    path: "/teachersInfo",
    element: <Teachers />,
  }
  ,  {
    path: "/UserStatus",
    element: <UserStatus />,
  }
  ,{
    path: "/Competitons",
    element: <Competitions />,
  }
  ,{
    path: "/Table",
    element: <Table />,
  }
]);

function App() {
  return (
  <>
{false && <Header />}
    <RouterProvider router={router} />
  </>
  );
}

export default App;

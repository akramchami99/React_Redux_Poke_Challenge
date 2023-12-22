import {
  createBrowserRouter,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { LearnPage } from "../pages/Learn";
import { LoginPage } from "../pages/Login";
import { ErrorPage } from "../pages/Error";
import { RegisterPage } from "../pages/register";
import { QuizzPage } from "../pages/Quizzpage";
import { LeaderBoard } from "../pages/LeaderBoard";
import { AuthGuard } from "./AuthGuard";
import { PokemonDetails } from "../pages/PokemonDetails";


const Root = () => {
  const navigate = useNavigate();
  const handleClicLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <div>
      <header>
        <nav className="header--list">
          <ul className="header--links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LearnPage/1">Learn Page</Link>
            </li>
            <li>
              <Link to="/QuizzPage">Quizz Page</Link>
            </li>
            <li>
              <Link to="/LeaderBoard">LeaderBoard Page</Link>
            </li>
          </ul>
          <button onClick={handleClicLogOut} className="header--button"> Logout </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Root />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "LearnPage/:page/*",
        element: <LearnPage />,
      },
      {
        path: "QuizzPage",
        element: <QuizzPage />,
      },
      {
        path: "LeaderBoard",
        element: <LeaderBoard />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonDetails />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

import ClientLayout from "../layout/client";
import About from "../pages/client/About";
import Blog from "../pages/client/Blog";
import Contact from "../pages/client/Contact";
import Destinations from "../pages/client/Destinations";
import Gallery from "../pages/client/Gallery";
import Home from "../pages/client/Home";
import Portfolio from "../pages/client/Portfolio";
import Register from "../pages/client/Register";
import Services from "../pages/client/Services";
import TourList from "../pages/client/TourList";
import TourSearch from "../pages/client/TourSearch";
import Login from "../pages/shared/Login";

const ROUTES = [
  // client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "tourlist",
        element: <TourList />,
      },
      {
        path: "toursearch",
        element: <TourSearch />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
];

export default ROUTES;

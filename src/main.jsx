import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Components/AboutPage.jsx";
import ProjectPage from "./Components/ProjectPage.jsx";
import ContactPage from "./Components/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: "/",
        element: <HeroSection />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/Projects",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

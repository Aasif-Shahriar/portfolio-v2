import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home-page/HomePage";
import AboutPage from "../pages/about-page/AboutPage";
import ProjectsPage from "../pages/projects-page/ProjectsPage";
import SkillsPage from "../pages/skills-page/SkillsPage";
import BlogsPage from "../pages/blogs-page/BlogsPage";
import ContactPage from "../pages/contact-page/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "projects",
        Component: ProjectsPage,
      },
      {
        path: "skills",
        Component: SkillsPage,
      },
      {
        path: "blogs",
        Component: BlogsPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
    ],
  },
]);

export default router;

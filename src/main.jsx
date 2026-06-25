import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Script from "next/script";

import "../styles/globals.css";

import Home from "../pages/index";
import About from "../pages/about";
import Blog from "../pages/blog";
import BlogPost from "../pages/blog/[slug]";
import Careers from "../pages/careers";
import CareerPost from "../pages/careers/[slug]";
import Contact from "../pages/contact";
import Faq from "../pages/faq";
import Impact from "../pages/impact";
import ErrorPage from "./next/ErrorPage";

import { getAllPosts as getAllBlogs, getPostBySlug as getBlogBySlug } from "../lib/api";
import { getAllPosts as getAllJobs, getPostBySlug as getJobBySlug } from "../lib/capi";
import markdownToHtml from "../lib/markdownToHtml";

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return pathname;
}

function Analytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5EY14HT9CB" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5EY14HT9CB');
        `}
      </Script>
    </>
  );
}

function AppRouter() {
  const pathname = usePathname();
  const [resolvedPost, setResolvedPost] = useState(null);

  useEffect(() => {
    let active = true;

    async function resolvePost() {
      const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
      const careerMatch = pathname.match(/^\/careers\/([^/]+)$/);

      if (!blogMatch && !careerMatch) {
        setResolvedPost(null);
        return;
      }

      const getter = blogMatch ? getBlogBySlug : getJobBySlug;
      const slug = blogMatch?.[1] || careerMatch?.[1];
      const fields = blogMatch
        ? [
            "title",
            "date",
            "slug",
            "excerpt",
            "authorName",
            "content",
            "ogImage",
            "coverImage",
            "imageCaption",
          ]
        : ["title", "eligible", "slug", "excerpt", "content", "skills", "experience"];
      const post = getter(slug, fields);

      if (!post?.slug) {
        setResolvedPost({});
        return;
      }

      const content = await markdownToHtml(post.content || "");

      if (active) {
        setResolvedPost({ ...post, content });
      }
    }

    resolvePost();

    return () => {
      active = false;
    };
  }, [pathname]);

  if (pathname === "/") {
    return <Home />;
  }

  if (pathname === "/about") {
    return <About />;
  }

  if (pathname === "/blog") {
    return (
      <Blog
        allPosts={getAllBlogs([
          "title",
          "date",
          "slug",
          "authorName",
          "coverImage",
          "excerpt",
        ])}
      />
    );
  }

  if (pathname.startsWith("/blog/")) {
    return resolvedPost ? <BlogPost post={resolvedPost} /> : null;
  }

  if (pathname === "/careers") {
    return (
      <Careers
        allJobs={getAllJobs([
          "title",
          "eligible",
          "slug",
          "excerpt",
          "skills",
          "experience",
        ])}
      />
    );
  }

  if (pathname.startsWith("/careers/")) {
    return resolvedPost ? <CareerPost post={resolvedPost} /> : null;
  }

  if (pathname === "/contact") {
    return <Contact />;
  }

  if (pathname === "/faq") {
    return <Faq />;
  }

  if (pathname === "/impact") {
    return <Impact />;
  }

  return <ErrorPage statusCode={404} />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <AppRouter />
  </React.StrictMode>
);

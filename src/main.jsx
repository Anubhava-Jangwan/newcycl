import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Script from "next/script";

import "../styles/globals.css";

import ErrorPage from "./next/ErrorPage";

const Home = lazy(() => import("../pages/index"));
const About = lazy(() => import("../pages/about"));
const Blog = lazy(() => import("../pages/blog"));
const BlogPost = lazy(() => import("../pages/blog/[slug]"));
const Careers = lazy(() => import("../pages/careers"));
const CareerPost = lazy(() => import("../pages/careers/[slug]"));
const Contact = lazy(() => import("../pages/contact"));
const Faq = lazy(() => import("../pages/faq"));
const Impact = lazy(() => import("../pages/impact"));

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

function BlogRoute() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    let active = true;

    import("../lib/api").then(({ getAllPosts }) => {
      if (!active) {
        return;
      }

      setAllPosts(
        getAllPosts([
          "title",
          "date",
          "slug",
          "authorName",
          "coverImage",
          "excerpt",
        ])
      );
    });

    return () => {
      active = false;
    };
  }, []);

  return allPosts ? <Blog allPosts={allPosts} /> : null;
}

function CareersRoute() {
  const [allJobs, setAllJobs] = useState(null);

  useEffect(() => {
    let active = true;

    import("../lib/capi").then(({ getAllPosts }) => {
      if (!active) {
        return;
      }

      setAllJobs(
        getAllPosts([
          "title",
          "eligible",
          "slug",
          "excerpt",
          "skills",
          "experience",
        ])
      );
    });

    return () => {
      active = false;
    };
  }, []);

  return allJobs ? <Careers allJobs={allJobs} /> : null;
}

function PostRoute({ type, slug }) {
  const [resolvedPost, setResolvedPost] = useState(null);

  useEffect(() => {
    let active = true;

    async function resolvePost() {
      const postModulePromise =
        type === "blog" ? import("../lib/api") : import("../lib/capi");
      const [{ getPostBySlug }, { default: markdownToHtml }] = await Promise.all([
        postModulePromise,
        import("../lib/markdownToHtml"),
      ]);
      const fields =
        type === "blog"
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
          : [
              "title",
              "eligible",
              "slug",
              "excerpt",
              "content",
              "skills",
              "experience",
            ];
      const post = getPostBySlug(slug, fields);

      if (!post?.slug) {
        if (active) {
          setResolvedPost({});
        }
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
  }, [slug, type]);

  if (!resolvedPost) {
    return null;
  }

  return type === "blog" ? (
    <BlogPost post={resolvedPost} />
  ) : (
    <CareerPost post={resolvedPost} />
  );
}

function AppRouter() {
  const pathname = usePathname();
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  const careerMatch = pathname.match(/^\/careers\/([^/]+)$/);

  if (pathname === "/") {
    return <Home />;
  }

  if (pathname === "/about") {
    return <About />;
  }

  if (pathname === "/blog") {
    return <BlogRoute />;
  }

  if (blogMatch) {
    return <PostRoute type="blog" slug={blogMatch[1]} />;
  }

  if (pathname === "/careers") {
    return <CareersRoute />;
  }

  if (careerMatch) {
    return <PostRoute type="career" slug={careerMatch[1]} />;
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
    <Suspense fallback={null}>
      <AppRouter />
    </Suspense>
  </React.StrictMode>
);

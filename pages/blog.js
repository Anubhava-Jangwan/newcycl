"use client";

import Head from "next/head";

import Navbar from "../components/Navbar";

import Curve from "../components/Curve";
import Footer from "../components/Footer";

import HeroPost from "../components/post-hero";

import { getAllPosts } from "../lib/api";
import BlogPosts from "../components/blog-posts";

const Blog = ({ user, allPosts }) => {

  allPosts.reverse();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>Blog | Newcycl</title>

        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newcycl.com/" />
        <meta
          property="og:title"
          content="Newcycl | Transform the way you throw waste"
        />
        <meta
          property="og:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="og:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://newcycl.com/" />
        <meta
          property="twitter:title"
          content="Newcycl | Transform the way you throw waste"
        />
        <meta
          property="twitter:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="twitter:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      <div className="relative lg:px-48 pt-24 mx-auto">
        <h1 className="px-12 text-5xl leading-none sm:mr-12">Blog</h1>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            imageCaption={heroPost.imageCaption}
            date={heroPost.date}
            authorName={heroPost.authorName}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <BlogPosts blogs={morePosts} />}
      </div>
      <Curve />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "authorName",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

export default Blog;

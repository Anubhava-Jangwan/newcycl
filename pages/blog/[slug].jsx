import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Curve from "../../components/Curve";
import Footer from "../../components/Footer";

import PostBody from "../../components/post-body";
import PostContainer from "../../components/post-container";
import PostHeader from "../../components/post-header";
import PostLayout from "../../components/post-layout";
import PostTitle from "../../components/post-title";

import { getPostBySlug, getAllPosts } from "../../lib/api";

import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post, preview }) {
  const router = useRouter();
  const title = `${post.title} | Newcycl`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <PostLayout preview={preview}>
      <PostContainer>
        <Navbar />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="relative max-w-3xl mx-auto px-6 sm:px-8 pt-28 pb-16 font-source-sans">
              <Head>
                <title>{title}</title>
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={`https://www.newcycl.com${post.ogImage}`} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                imageCaption={post.imageCaption}
                date={post.date}
                authorName={post.authorName}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
        <div className="py-12"></div>
        <Curve />
        <Footer />
      </PostContainer>
    </PostLayout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "excerpt",
    "authorName",
    "content",
    "ogImage",
    "coverImage",
    "imageCaption",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

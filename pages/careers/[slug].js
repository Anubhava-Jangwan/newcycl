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

import { getPostBySlug, getAllPosts } from "../../lib/capi";

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
            <article className="relative lg:px-48 pt-24 mx-auto">
              <Head>
                <title>{title}</title>
                <meta property="og:description" content={post.description} />
                <meta
                  property="og:image"
                  content="https://www.newcycl.com/newcycl-careers-banner.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://newcycl.com/" />
                <meta property="twitter:title" content={title} />
                <meta
                  property="twitter:description"
                  content={post.description}
                />
                <meta
                  property="twitter:image"
                  content="https://www.newcycl.com/newcycl-careers-banner.png"
                />

                <link rel="icon" href="/favicon.ico" sizes="any" />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                imageCaption={post.imageCaption}
                date={post.date}
                authorName={post.authorName}
                eligible={post.eligible}
              />
              <PostBody content={post.content} />
              <div className="w-full text-center mt-12">
                <a
                  href="https://forms.gle/GhiMRTSh7yEwp6JZ9"
                  target="_blank"
                  className="cursor-pointer bg-nc-purple-900 text-white font-medium py-2 px-4 rounded"
                >
                  Apply here
                </a>
              </div>
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
    "eligible",
    "slug",
    "excerpt",
    "content",
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

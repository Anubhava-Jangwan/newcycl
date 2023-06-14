// import Avatar from "./avatar";
// import DateFormatter from "./date-formatter";
import CoverImage from "./post-cover-image";
import PostAuthor from "./post-author";
import Link from "next/link";

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  imageCaption,
  authorName,
  slug,
}) => {
  return (
    <section className="px-12">
      <div className="my-8">
        <CoverImage
          title={title}
          src={coverImage}
          imageCaption={imageCaption}
        />
      </div>
      <div className="mb-20 md:mb-28">
        <h3 className="mb-4 text-2xl lg:text-2xl leading-tight">
          <Link
            as={`/blogs/${slug}`}
            href="/blogs/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <PostAuthor authorName={authorName} date={date} />
        <p className="text-lg leading-relaxed mb-2">{excerpt}</p>
      </div>
    </section>
  );
};

export default HeroPost;

import CoverImage from "./post-cover-image";
import PostAuthor from "./post-author";
import Link from "next/link";

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  authorName,
  slug,
}) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
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
  );
};

export default PostPreview;

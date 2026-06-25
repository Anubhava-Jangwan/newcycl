import PostPreview from "./post-preview";

const Blogs = ({ blogs }) => {
  return (
    <section className="px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {blogs.map((blog) => (
          <PostPreview
            key={blog.slug}
            title={blog.title}
            coverImage={blog.coverImage}
            date={blog.date}
            authorName={blog.authorName}
            slug={blog.slug}
            excerpt={blog.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;

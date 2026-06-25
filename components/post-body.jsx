const PostBody = ({ content }) => {
  return (
    <div className="mx-auto">
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;

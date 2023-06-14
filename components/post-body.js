const PostBody = ({ content }) => {
  return (
    <div className="mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;

import { ReactNode } from "react";

const PostTitle = ({ children }) => {
  return (
    <h1 className="px-12 sm:px-12 text-4xl sm:text-5xl leading-none mb-6">
      {children}
    </h1>
  );
};

export default PostTitle;

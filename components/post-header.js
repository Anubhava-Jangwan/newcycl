import CoverImage from "./post-cover-image";
import PostTitle from "./post-title";

const PostHeader = ({ title, coverImage, imageCaption, date, authorName }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="sm:px-12">
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            title={title}
            src={coverImage}
            imageCaption={imageCaption}
          />
        </div>
        <div className="px-12 sm:px-0 flex items-center mb-6">
          <div class="relative inline-flex items-center justify-center w-10 h-10 bg-gray-100 bg-red-600 rounded-full mr-3">
            <span class="font-medium text-white">A</span>
          </div>
          <div className="text-gray-500">
            {authorName} &middot; {date}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;

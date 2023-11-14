import { Edit } from "react-feather";

import CoverImage from "./post-cover-image";
import PostTitle from "./post-title";

const PostHeader = ({
  title,
  coverImage,
  imageCaption,
  date,
  authorName,
  eligible,
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="sm:px-12">
        {coverImage && (
          <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage
              title={title}
              src={coverImage}
              imageCaption={imageCaption}
            />
          </div>
        )}
        <div className="px-12 sm:px-0 flex items-center mb-6">
          {authorName && (
            <div className="relative inline-flex items-center justify-center w-10 h-10 bg-gray-100 bg-red-600 rounded-full mr-3">
              <span className="font-medium text-white">
                {authorName.charAt(0)}
              </span>
            </div>
          )}
          <div className="text-gray-500">
            {eligible ? (
              <div className="flex items-center justify-between">
                <div className="-mt-1.5">
                  {title === "IoT Ninja" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                  ) : (
                    <Edit />
                  )}
                </div>
                <div className="ml-2">{eligible}</div>
              </div>
            ) : (
              <>
                {authorName} &middot; {date}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;

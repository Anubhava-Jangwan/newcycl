import { Clock, MapPin, User } from "react-feather";

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
                <div className="text-gray-500 flex">
                  <div className="flex items-center justify-center">
                    <User size="18" color="#5433ffcf" />
                    <div className="ml-1">New grads | </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock size="18" color="#5433ffcf" />
                    <div className="ml-1">Full time |</div>
                  </div>

                  <div className="flex items-center justify-center">
                    <MapPin size="18" color="#5433ffcf" />
                    <div className="ml-1">Bengaluru</div>
                  </div>
                </div>
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

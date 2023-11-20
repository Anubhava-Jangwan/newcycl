import { Clock, MapPin, User } from "react-feather";

import CoverImage from "./post-cover-image";
import PostTitle from "./post-title";

const ShowSkills = (skillsStr) => {
  const skills = skillsStr.split(",");
  return skills.map((skill) => (
    <div className="mx-1 mb-2 p-1 text-sm bg-nc-purple-400 rounded flex">
      {skill}
    </div>
  ));
};
const PostHeader = ({
  title,
  coverImage,
  imageCaption,
  date,
  authorName,
  eligible,
  skills,
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
            <div className="relative inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-full mr-3">
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
                    <div className="ml-1 text-sm">New grads | </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock size="18" color="#5433ffcf" />
                    <div className="ml-1 text-sm">Full time |</div>
                  </div>

                  <div className="flex items-center justify-center">
                    <MapPin size="18" color="#5433ffcf" />
                    <div className="ml-1 text-sm">Bengaluru</div>
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
        {skills && (
          <div className="px-12 sm:px-0 mb-6 flex flex-wrap items-center">
            <span className="font-bold mb-2">Skills:</span> {ShowSkills(skills)}
          </div>
        )}
      </div>
    </>
  );
};

export default PostHeader;

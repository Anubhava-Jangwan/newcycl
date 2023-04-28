import React, { useEffect, useState } from "react";

import Image from "next/image";

import avatarw1 from "../public/avatar-w-1.svg";
import avatarw2 from "../public/avatar-w-2.svg";
import avatarw3 from "../public/avatar-w-3.svg";
import avatarw4 from "../public/avatar-w-4.svg";

import avatarm1 from "../public/avatar-m-1.svg";
import avatarm2 from "../public/avatar-m-2.svg";
import avatarm3 from "../public/avatar-m-3.svg";

const icons = {
  avatarw1,
  avatarw2,
  avatarw3,
  avatarw4,
  avatarm1,
  avatarm2,
  avatarm3,
};

export default function WasteStoryCard({ story, index }) {
  const [count, setCount] = useState(0);

  const upVote = () => {};

  return (
    <div
      key={index}
      className={`ws-card flex flex-col justify-between shrink-0 p-6 bg-slate-50 rounded-md`}
    >
      <div className="flex shrink-0">
        <div className="text-lg mr-4">{story && story.feedback}</div>
        <button
          onClick={upVote}
          className="hidden upvote text-center min-w-[4rem] h-8 p-1 rounded border border-gray-500 bg-transparent hover:border-transparent hover:text-white"
        >
          {count} 👍
        </button>
      </div>
      <div className="flex gap-2 mt-12">
        <div className="avatar mt-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src={story && icons[story.icon]}
              alt="Avatar"
              width="36"
              height="36"
            />
          </div>
        </div>
        <div className="ml-2 mt-2">
          <p className="font-medium">{story && story.name}</p>
          <p className="text-size-small">{story && story.location}</p>
        </div>
      </div>
    </div>
  );
}

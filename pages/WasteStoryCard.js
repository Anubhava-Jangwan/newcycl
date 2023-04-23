import React, { useEffect, useState } from "react";

export default function WasteStoryCard({ story, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.countapi.xyz/get/newcycle/ws${index}`)
      .then((response) => response.json())
      .then((data) => {
        setCount(data.value);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const upVote = () => {
    fetch(`https://api.countapi.xyz/hit/newcycle/ws${index}`)
      .then((response) => response.json())
      .then(function (data) {
        console.log({ data });
        setCount(data.value || count + 1);
      });
  };

  return (
    <div
      key={index}
      className={`flex flex-col justify-between shrink-0 p-6 bg-slate-50 mr-6 rounded-md w-80 md:w-96 lg:w-96 xl:w-96 2xl:w-96 min-h-60`}
    >
      <div className="flex shrink-0">
        <div className="text-lg mr-4">{story && story.feedback}</div>
        <button
          onClick={upVote}
          className="upvote text-center w-36 h-8 p-1 rounded-md border border-gray-500 bg-transparent"
        >
          {count} 👍
        </button>
      </div>
      <div className="flex gap-2 mt-12">
        <div className="avatar mt-2">
          <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-nc-purple"></div>
        </div>
        <div className="ml-2">
          <p className="font-medium">{story && story.name}</p>
          <p className="text-size-small">{story && story.location}</p>
        </div>
      </div>
    </div>
  );
}

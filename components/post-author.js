import React from "react";

export default function PostAuthor({ authorName, date }) {
  return (
    <div className="sm:px-0 flex items-center mb-6">
      <div className="relative inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-full mr-3">
        <span className="font-medium text-white">{authorName.charAt(0)}</span>
      </div>
      <div className="text-gray-500">
        {authorName} &middot; {date}
      </div>
    </div>
  );
}

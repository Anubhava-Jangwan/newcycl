import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="px-12 mt-6">
      <a href="javascript:;" className="text-2xl">
        {job.title}
      </a>
      <div className="text-gray-500">{job.elgible}</div>
    </div>
  );
};

export default JobCard;

import React from "react";
import Link from "next/link";

const JobCard = ({ job }) => {
  return (
    <div className="px-12 mt-6">
      <Link
        as={`/careers/${job.slug}`}
        href="/careers/[slug]"
        className="hover:underline text-xl"
      >
        {job.title}
      </Link>
      <div className="text-gray-500">{job.eligible}</div>
    </div>
  );
};

export default JobCard;

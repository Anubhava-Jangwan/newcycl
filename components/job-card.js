import React from "react";
import Link from "next/link";
import { Clock, MapPin, User } from "react-feather";

const JobCard = ({ job }) => {
  return (
    <div className="px-12 mt-6 text-left">
      <Link
        as={`/careers/${job.slug}`}
        href="/careers/[slug]"
        className="hover:underline text-xl flex items-center decoration-nc-purple-900 underline underline-offset-2"
      >
        <div>{job.title}</div>
      </Link>

      <div className="text-gray-500 flex">
        <div className="flex items-center justify-center">
          <User size="18" />
          <div className="ml-1 text-sm">
            {job.experience ? `${job.experience} |` : "New grads |"}
          </div>
        </div>
        <div className="ml-1 flex items-center justify-center">
          <Clock size="18" />
          <div className="ml-1 text-sm">Full time |</div>
        </div>

        <div className="ml-1 flex items-center justify-center">
          <MapPin size="18" />
          <div className="ml-1 text-sm">Remote</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

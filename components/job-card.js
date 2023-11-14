import React from "react";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, User } from "react-feather";

const JobCard = ({ job }) => {
  return (
    <div className="px-12 mt-6 text-left">
      <Link
        as={`/careers/${job.slug}`}
        href="/careers/[slug]"
        className="hover:underline text-xl flex items-center"
      >
        <div>{job.title}</div>
        <div className="ml-1">
          <ArrowRight size="16" color="#5433ffcf" />
        </div>
      </Link>

      <div className="text-gray-500 flex">
        <div className="flex items-center justify-center">
          <User size="18" />
          <div className="ml-1 text-sm">New grads | </div>
        </div>
        <div className="flex items-center justify-center">
          <Clock size="18" />
          <div className="ml-1 text-sm">Full time |</div>
        </div>

        <div className="flex items-center justify-center">
          <MapPin size="18" />
          <div className="ml-1 text-sm">Bengaluru</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

import React from "react";
import Link from "next/link";
import { Clock, MapPin, User } from "react-feather";

const JobCard = ({ job }) => {
  return (
    <div className="p-6 bg-white border border-emerald-500/5 hover:border-accent-green/20 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group">
      <div>
        <Link
          as={`/careers/${job.slug}`}
          href="/careers/[slug]"
          className="text-lg font-bold text-ink-dark group-hover:text-accent-green transition-colors duration-200 block mb-3"
        >
          {job.title}
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-body/80">
          <div className="flex items-center gap-1.5 bg-backdrop px-3 py-1 rounded-full text-xs font-medium text-ink-light">
            <User size="14" className="text-accent-green" />
            <span>{job.experience ? job.experience : "New grads"}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-backdrop px-3 py-1 rounded-full text-xs font-medium text-ink-light">
            <Clock size="14" className="text-accent-green" />
            <span>Full time</span>
          </div>
          <div className="flex items-center gap-1.5 bg-backdrop px-3 py-1 rounded-full text-xs font-medium text-ink-light">
            <MapPin size="14" className="text-accent-green" />
            <span>Remote</span>
          </div>
        </div>
      </div>

      <Link
        as={`/careers/${job.slug}`}
        href="/careers/[slug]"
        className="self-start sm:self-auto px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-backdrop group-hover:bg-accent-green group-hover:text-white text-ink transition-all duration-200"
      >
        View Role
      </Link>
    </div>
  );
};

export default JobCard;

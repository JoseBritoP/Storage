import { convertFileSize } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormattedDateTime from "../FormattedDateTime";

interface SummaryProps {
  usageSummary: {
    title: string;
    size: number;
    latestDate: string;
    icon: string;
    url: string;
}[]
}
export default function SummaryFileType({ usageSummary }:SummaryProps) {

  return (
    <ul className="dashboard-summary-list">
      {usageSummary.map((summary) => (
        <Link
          href={summary.url}
          key={summary.title}
          className="dashboard-summary-card"
        >
          <div className="space-y-4">
            <div className="flex justify-between gap-3">
              <Image
                src={summary.icon}
                width={100}
                height={100}
                alt="uploaded image"
                className="summary-type-icon"
              />
              <h4 className="summary-type-size">
                {convertFileSize(summary.size) || 0}
              </h4>
            </div>

            <h5 className="summary-type-title">{summary.title}</h5>
            <div className="bg-light-400 border" />
            <FormattedDateTime
              date={summary.latestDate}
              className="text-center"
            />
          </div>
        </Link>
      ))}
    </ul>
  );
}

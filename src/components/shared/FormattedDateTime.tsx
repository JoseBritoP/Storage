import React from "react";
import { cn, formatDateTime } from "@/lib/utils";

export const FormattedDateTime = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  return (
    <p className={cn("body-1 text-light-100 font-semibold dark:text-light-300/80", className)}>
      {formatDateTime(date)}
    </p>
  );
};
export default FormattedDateTime;
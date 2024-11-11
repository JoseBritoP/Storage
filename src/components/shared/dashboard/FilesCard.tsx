import Link from "next/link";
import { Models } from "node-appwrite";
import React from "react";
import Thumbnail from "../Thumbnail";
import FormattedDateTime from "../FormattedDateTime";
import ActionDropdown from "../ActionDropdown";

interface FilesCard {
  file: Models.Document;
}
export default function FilesCard({ file }: FilesCard) {
  return (
    <Link
      href={file.url}
      target="_blank"
      className="flex items-center gap-3 bg-gray-50 dark:bg-dark-200/60 pl-2 py-3 rounded-md"
      key={file.$id}
    >
      <Thumbnail type={file.type} extension={file.extension} url={file.url} />

      <div className="recent-file-details">
        <div className="flex flex-col gap-1">
          <p className="recent-file-name">{file.name}</p>
          <FormattedDateTime date={file.$createdAt} className="caption" />
        </div>
        <ActionDropdown file={file} />
      </div>
    </Link>
  );
}

import React from "react";
import { Models } from "node-appwrite";
import FilesCard from "./FilesCard";

interface RecentFilesProps {
  files: Models.Document[]
}

export default function RecentFiles({files}:RecentFilesProps) {
  return (
    <section className="dashboard-recent-files">
      <h2 className="h3 xl:h2 text-light-100 dark:text-light-400">
        Recent files uploaded
      </h2>
      {files.length > 0 ? (
        <ul className="mt-5 flex flex-col gap-5">
          {files.map((file: Models.Document) => (
            <FilesCard key={file.$id} file={file}/>
          ))}
        </ul>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </section>
  );
}

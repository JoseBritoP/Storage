"use client"
import { MAX_FILE_SIZE } from '@/constants';
import { uploadFile } from '@/lib/actions/file.actions';
import { usePathname } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify';
import { FileUploaderProps } from '@/components/shared/Header/FileUplodeader';
import { useDropzone } from 'react-dropzone';

export default function useFileUploader({accountId,ownerId}:FileUploaderProps) {
  const path = usePathname();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);

      const uploadPromises = acceptedFiles.map(async (file) => {
        if (file.size > MAX_FILE_SIZE) {
          setFiles((prevFiles) =>
            prevFiles.filter((f) => f.name !== file.name),
          );
        
          toast.error(`${file.name} is too large. Max file size is 50MB`)
        }

        return uploadFile({ file, ownerId, accountId, path }).then(
          (uploadedFile) => {
            if (uploadedFile) {
              setFiles((prevFiles) =>
                prevFiles.filter((f) => f.name !== file.name),
              );
            }
          },
        );
      });

      await Promise.all(uploadPromises);
    },
    [ownerId, accountId, path],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    fileName: string,
  ) => {
    e.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return { files, getRootProps, getInputProps, handleRemoveFile }
}

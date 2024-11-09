/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, Bounce, Slide, Flip, Zoom } from "react-toastify";
import { useTheme } from "next-themes";
export default function ToastNotification() {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="top-right"
      autoClose={1800}
      closeOnClick
      theme={theme}
      transition={Slide}
      draggable={true}
      stacked={true}
      toastClassName={'bg-gray-100 text-gray-800 dark:text-gray-200 shadow-md dark:bg-gray-800 rounded-lg rounded-b-none p-2'}
    />
  );
}

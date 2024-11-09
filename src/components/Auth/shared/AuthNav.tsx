import React from "react";
import { DarkModeSwitch } from "../ui/DarkModeSwitch";

export default function AuthNav() {
  return (
    <>
      <div className="flex justify-end items-center w-full lg:hidden">
        <DarkModeSwitch />
      </div>
      <div className="hidden lg:flex justify-end items-center w-full">
        <DarkModeSwitch />
      </div>
    </>
  );
}

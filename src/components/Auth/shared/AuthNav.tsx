import { DarkModeSwitch } from "@/components/ui/DarkModeSwitch";
import React from "react";

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

import { DarkModeSwitch } from "@/components/ui/DarkModeSwitch";
import React from "react";

export default function AuthNav() {
  return (
      <div className="flex justify-end items-center w-1/3">
        <DarkModeSwitch />
      </div>
  );
}

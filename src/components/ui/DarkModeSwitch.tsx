"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  const size = 20

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleToggle = (newCheckedState: boolean) => {
    setChecked(newCheckedState);
    setTimeout(() => {
      setTheme(newCheckedState ? "dark" : "light");
    }, 100); 
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-4 px-6 border rounded-full shadow-lg dark:shadow-gray-800 dark:shadow-md w-2/4">
      <Sun size={size} className="opacity-100 dark:opacity-35 cursor-pointer" onClick={()=>setTheme('light')} />
      <Switch
        checked={checked}
        onCheckedChange={handleToggle}
        className="p-2"
      />
      <MoonStar size={size} className="opacity-35 dark:opacity-100 cursor-pointer" onClick={()=>setTheme('dark')} />
    </div>
  );
}

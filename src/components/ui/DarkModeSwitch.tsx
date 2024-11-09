"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  // Sincronizar el estado local del switch con el tema actual
  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  // Cambiar el tema con un pequeño retraso para permitir que se complete la animación
  const handleToggle = (newCheckedState: boolean) => {
    setChecked(newCheckedState);
    setTimeout(() => {
      setTheme(newCheckedState ? "dark" : "light");
    }, 100); // Ajusta el tiempo si es necesario
  };

  return (
    <div className="flex justify-center items-center space-x-2 p-2">
      <Sun size={15} className="opacity-100 dark:opacity-35" />
      <Switch checked={checked} onCheckedChange={handleToggle} />
      <MoonStar size={15} className="opacity-35 dark:opacity-100" />
    </div>
  );
}

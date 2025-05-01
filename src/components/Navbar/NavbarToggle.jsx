"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function NavbarToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer shadow-none"
      >
        {theme === "dark" ? (
          <Moon className="size-5" />
        ) : (
          <Sun className="size-5" />
        )}
      </Button>
    </div>
  );
}

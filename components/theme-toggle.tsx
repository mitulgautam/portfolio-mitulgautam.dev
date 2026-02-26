"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex bg-muted rounded-full p-1 ring-1 ring-border shadow-sm retro:rounded-none retro:border-2 retro:border-black retro:bg-card">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all retro:rounded-none ${theme === "light"
                        ? "bg-background shadow-sm text-foreground retro:bg-blue-600 retro:text-white"
                        : "text-muted-foreground hover:text-foreground retro:hover:bg-gray-300"
                    }`}
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light Theme</span>
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all retro:rounded-none ${theme === "dark"
                        ? "bg-background shadow-sm text-foreground retro:bg-blue-600 retro:text-white"
                        : "text-muted-foreground hover:text-foreground retro:hover:bg-gray-300"
                    }`}
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark Theme</span>
            </button>
            <button
                onClick={() => setTheme("retro")}
                className={`p-2 rounded-full transition-all retro:rounded-none ${theme === "retro"
                        ? "bg-background shadow-sm text-foreground retro:bg-blue-600 retro:text-white retro:border-2 retro:border-black"
                        : "text-muted-foreground hover:text-foreground retro:hover:bg-gray-300"
                    }`}
            >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">Retro Theme</span>
            </button>
        </div>
    )
}

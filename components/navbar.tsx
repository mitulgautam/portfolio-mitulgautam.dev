"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { CV_DATA } from "@/lib/data"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 retro:bg-card retro:border-b-4 retro:border-black retro:backdrop-blur-none">
            <div className="container flex h-16 max-w-screen-xl items-center justify-between mx-auto px-4">
                <Link href="/" className="flex items-center space-x-2 retro:active:translate-y-px">
                    <span className="font-bold text-xl tracking-tight retro:text-black">
                        {CV_DATA.name.split(" ")[0]}
                        <span className="text-muted-foreground retro:text-blue-800">.dev</span>
                    </span>
                </Link>

                <nav className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60 retro:text-black retro:hover:text-blue-800 retro:underline">
                            Experience
                        </Link>
                        <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60 retro:text-black retro:hover:text-blue-800 retro:underline">
                            Projects
                        </Link>
                        <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60 retro:text-black retro:hover:text-blue-800 retro:underline">
                            Skills
                        </Link>
                    </div>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}

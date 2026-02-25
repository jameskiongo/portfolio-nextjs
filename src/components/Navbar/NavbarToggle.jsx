"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function NavbarToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// Ensure we only show theme-specific icons after mounting
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button className="cursor-pointer shadow-none" size="icon" disabled>
				<Sun className="size-5 opacity-0" /> {/* Invisible placeholder */}
			</Button>
		);
	}

	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="bg-transparent text-primary hover:bg-transparent cursor-pointer shadow-none transition-all"
			size="icon"
		>
			{theme === "dark" ? (
				<Moon className="size-5" />
			) : (
				<Sun className="size-5" />
			)}
		</Button>
	);
}

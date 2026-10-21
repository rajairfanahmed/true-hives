"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Magnetic from "@/components/ui/magnetic"

const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
]

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
        >
            <nav className="flex items-center justify-between p-2 pl-6 pr-2 rounded-full glass bg-background/50 border-white/10 w-full max-w-5xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-bold tracking-tighter mix-blend-difference text-foreground">
                        True Hives
                    </Link>
                    <div className="hidden md:flex gap-1 bg-secondary/50 rounded-full p-1 pl-2 pr-2 border border-white/5">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background/50 block"
                                >
                                    {link.name}
                                </Link>
                            </Magnetic>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Magnetic>
                        <Button size="sm" className="rounded-full font-semibold px-6">
                            Book a Call
                        </Button>
                    </Magnetic>
                </div>
            </nav>
        </motion.header>
    )
}

"use client"

import Link from "next/link"
import Magnetic from "@/components/ui/magnetic"

export function Footer() {
    return (
        <footer className="pt-24 pb-12 container px-4 md:px-6 border-t border-white/10 mt-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-24">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none opacity-90">
                    Let's<br />Build.
                </h2>
                <div className="flex flex-col gap-4 text-right items-end">
                    <Magnetic>
                        <a href="mailto:hello@truehives.com" className="text-2xl md:text-3xl font-medium hover:underline decoration-1 underline-offset-8">
                            hello@truehives.com
                        </a>
                    </Magnetic>
                    <p className="text-muted-foreground">
                        San Francisco, CA<br />
                        Available Worldwide
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="space-y-4">
                    <h4 className="font-semibold">Sitemap</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#work" className="hover:text-foreground transition-colors">Work</Link></li>
                        <li><Link href="#services" className="hover:text-foreground transition-colors">Services</Link></li>
                        <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Socials</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground transition-colors">Twitter / X</a></li>
                        <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-xs text-muted-foreground">
                        © 2026 True Hives Inc.<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

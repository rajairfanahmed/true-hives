"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Magnetic from "@/components/ui/magnetic"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm bg-background/30"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    Accepting new projects for Q1 2026
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter max-w-5xl leading-[0.9]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    Design. Dev. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
                        Intelligence.
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    We build digital ecosystems for the future using bleeding-edge AI and ultra-modern design principles.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Magnetic>
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                            Start Project <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Magnetic>
                    <Magnetic>
                        <Button variant="blur" size="lg" className="h-14 px-8 text-lg rounded-full">
                            View Our Work
                        </Button>
                    </Magnetic>
                </motion.div>

                {/* Abstract 3D Element Placeholder (CSS 3D Transform) */}
                <motion.div
                    className="absolute -z-20 w-[800px] h-[800px] opacity-30 dark:opacity-20 pointer-events-none"
                    initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 360, scale: 1, opacity: 0.2 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear", opacity: { duration: 1 } }}
                >
                    <div className="w-full h-full border-[1px] border-foreground/20 rounded-full flex items-center justify-center transform-gpu perspective-1000 rotate-x-60">
                        <div className="w-[80%] h-[80%] border-[1px] border-foreground/30 rounded-full animate-spin-slow duration-[30s]" />
                        <div className="w-[60%] h-[60%] border-[1px] border-foreground/40 rounded-full absolute animate-ping duration-[10s]" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

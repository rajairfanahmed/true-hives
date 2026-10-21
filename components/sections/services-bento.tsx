"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Monitor, Bot, Terminal, Code2, LineChart, Cpu } from "lucide-react"

export function ServicesBento() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section id="services" className="container px-4 md:px-6 py-24 space-y-12">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                    Ecosystem Architecture
                </h2>
                <p className="text-muted-foreground max-w-[700px]">
                    We combine aesthetic excellence with functional intelligence.
                </p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
            >
                {/* Card 1: UI/UX Design (Span 2) */}
                <motion.div variants={item} className="md:col-span-2 group">
                    <Card className="h-full bg-secondary/10 border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden relative">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <CardTitle>UI/UX Design</CardTitle>
                            <CardDescription>
                                Crafting interfaces that feel inevitable.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="h-full relative">
                            {/* Mock UI Visual */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[90%] bg-background rounded-l-xl border border-white/10 shadow-2xl p-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-8 w-2/3 bg-muted rounded" />
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="h-20 bg-muted/50 rounded" />
                                        <div className="h-20 bg-muted/50 rounded" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Card 2: AI Automation (Span 1) */}
                <motion.div variants={item} className="md:col-span-1 group">
                    <Card className="h-full bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full group-hover:animate-pulse" />
                        <CardHeader className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                                <Bot className="w-6 h-6 animate-pulse" />
                            </div>
                            <CardTitle>AI Automation</CardTitle>
                            <CardDescription>
                                Intelligent agents that work while you sleep.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="flex items-center justify-center mt-8">
                                <Cpu className="w-24 h-24 text-blue-500/20 group-hover:text-blue-500/40 transition-colors animate-spin-slow" />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Card 3: Development (Span 3 / Full Width) */}
                <motion.div variants={item} className="md:col-span-3 group">
                    <Card className="h-full bg-zinc-950 border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.01] overflow-hidden text-white">
                        <div className="grid md:grid-cols-2 h-full">
                            <CardHeader className="justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                                    <Terminal className="w-6 h-6" />
                                </div>
                                <CardTitle>Full-Stack Engineering</CardTitle>
                                <CardDescription className="text-zinc-400">
                                    Next.js, React, Node.js. Performance obsessed architecture.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center p-6 bg-zinc-900/50 font-mono text-sm relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-marquee opacity-0 group-hover:opacity-100" />
                                <pre className="text-green-400 leading-relaxed overflow-hidden">
                                    {`const TrueHives = async () => {
  await ecosystem.init({
    design: "premium",
    performance: 100,
    ai: true
  });
  
  return <Future />;
}`}
                                </pre>
                            </CardContent>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>
        </section>
    )
}

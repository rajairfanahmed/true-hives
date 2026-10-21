"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

// Placeholder logos (using generic text or shapes if no images) or just styled text
const CLIENTS = ["Acme Corp", "Nebula", "Vertex", "Orbit", "Quasar", "Pulsar", "Zenith", "Apex"]

const PROJECTS = [
    { id: 1, title: "FinTech Dashboard", category: "UI/UX Design", color: "bg-blue-950" },
    { id: 2, title: "AI Medical Assistant", category: "Application", color: "bg-emerald-950" },
    { id: 3, title: "Luxury Real Estate", category: "Web Development", color: "bg-neutral-900" },
]

export function WorkMarquee() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    // Marquee animation
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"])

    return (
        <section id="work" className="py-24 bg-background overflow-hidden">
            {/* Marquee */}
            <div className="relative flex overflow-x-hidden mb-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <motion.div
                    className="flex gap-16 whitespace-nowrap py-12"
                    style={{ x }}
                >
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold tracking-tighter text-muted-foreground/20 uppercase">
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div ref={targetRef} className="container px-4 md:px-6 space-y-32">
                <div className="flex flex-col items-center text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Selected Works</h2>
                </div>

                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    })

    // Parallax effect for "image"
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[60vh] w-full rounded-3xl overflow-hidden border border-white/10"
        >
            {/* Background / Image Placeholder */}
            <motion.div
                style={{ y }}
                className={`absolute inset-0 ${project.color} transition-transform duration-500 ease-out`}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <span className="text-sm font-mono text-primary-foreground/60 mb-2 block">{project.category}</span>
                    <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground">{project.title}</h3>
                </div>
                <div className="px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View Case Study
                </div>
            </div>
        </motion.div>
    )
}

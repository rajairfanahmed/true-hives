"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const TIERS = [
    {
        name: "Starter",
        price: { monthly: "$2,900", quarterly: "$7,900" },
        description: "Perfect for rapid MVPs and design interactions.",
        features: [
            "High-fidelity UI Design",
            "Interactive Prototypes",
            "Weekly Updates",
            "Slack Communication"
        ]
    },
    {
        name: "Pro",
        price: { monthly: "$5,400", quarterly: "$14,500" },
        description: "Full-scale product development and scaling.",
        features: [
            "Everything in Starter",
            "Next.js Development",
            "Framer Motion Animations",
            "Design System Creation",
            "Priority Support"
        ],
        highlight: true
    },
    {
        name: "Enterprise",
        price: { monthly: "Custom", quarterly: "Custom" },
        description: "Beskpoke AI solutions and dedicated squads.",
        features: [
            "Everything in Pro",
            "AI Automations",
            "Custom LLM Integration",
            "24/7 Priority Support",
            "Dedicated Slack Channel"
        ]
    }
]

export function Pricing() {
    const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly")

    return (
        <section id="pricing" className="py-24 container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Investment</h2>
                <p className="text-muted-foreground max-w-[600px]">
                    Transparent pricing for world-class output. Pause or cancel anytime.
                </p>

                <div className="flex items-center gap-2 p-1 bg-secondary/50 rounded-full border border-white/5 mt-6">
                    {["monthly", "quarterly"].map((period) => (
                        <button
                            key={period}
                            onClick={() => setBilling(period as any)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                billing === period
                                    ? "bg-background shadow-sm text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {period.charAt(0).toUpperCase() + period.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {TIERS.map((tier, i) => (
                    <motion.div
                        key={tier.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {tier.highlight && (
                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-blue-500/50 to-purple-500/50 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}

                        <Card className={cn(
                            "h-full relative flex flex-col transition-all duration-300",
                            tier.highlight ? "border-blue-500/20 bg-background/80" : "bg-card/50 hover:bg-card/80"
                        )}>
                            <CardHeader>
                                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-bold mb-6">
                                    {tier.price[billing]}
                                    {tier.price[billing] !== "Custom" && <span className="text-lg font-normal text-muted-foreground">/{billing === "monthly" ? "mo" : "qtr"}</span>}
                                </div>
                                <ul className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={tier.highlight ? "default" : "outline"}>
                                    {tier.price[billing] === "Custom" ? "Contact Team" : "Get Started"}
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

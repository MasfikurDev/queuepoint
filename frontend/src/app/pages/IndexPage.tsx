import { Link } from "react-router-dom";

import {
    ArrowRight,
    Users,
    Clock,
    BarChart3,
    Shield,
    Smartphone,
    Building2,
} from "lucide-react";

import { Button } from "@ui/Button";
import { Card } from "@ui/Card";

export default function IndexPage() {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="border-b border-(--theme-surface-border) bg-(--theme-surface) backdrop-blur sticky top-0 z-50">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-(--theme-primary) flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    Q
                                </span>
                            </div>
                            <span className="text-xl font-bold text-(--theme-text-primary)">
                                QueuePoint
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/login">
                                <Button variant="ghost" size="sm">
                                    Sign in
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button size="sm">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-page opacity-90" />
                <div className="absolute inset-0 bg-pattern" />
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tight text-(--theme-text-primary) sm:text-7xl">
                            Smart Queue Management
                            <span className="block text-(--theme-primary) mt-2">
                                for Physical Spaces
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-(--theme-text-secondary) max-w-3xl mx-auto">
                            QueuePoint is a modern, backend-first queue
                            management system designed for hospitals, banks,
                            public offices, and private businesses. Create and
                            manage multiple queues while consumers receive and
                            track tokens in a fair, ordered flow.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <Link to="/register">
                                <Button size="lg" className="gap-2">
                                    Start Free Trial{" "}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="#demo">
                                <Button variant="outline" size="lg">
                                    Watch Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-(--theme-surface)/50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-(--theme-text-primary) sm:text-4xl">
                            Everything you need to manage queues
                        </h2>
                        <p className="mt-4 text-lg text-(--theme-text-secondary)">
                            Powerful features for organizations and a seamless
                            experience for consumers
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <Card variant="glass" className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-(--theme-primary)/20 flex items-center justify-center mb-4">
                                <Building2 className="h-6 w-6 text-(--theme-text-primary)" />
                            </div>
                            <h3 className="text-xl font-semibold text-(--theme-text-primary) mb-2">
                                Multi-Queue Management
                            </h3>
                            <p className="text-(--theme-text-secondary)">
                                Create and manage multiple queues under your
                                organization account. Perfect for businesses
                                with multiple service points.
                            </p>
                        </Card>

                        <Card variant="glass" className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-(--theme-primary)/20 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-(--theme-text-primary)" />
                            </div>
                            <h3 className="text-xl font-semibold text-(--theme-text-primary) mb-2">
                                Fair Token Flow
                            </h3>
                            <p className="text-(--theme-text-secondary)">
                                Consumers receive and track tokens in a fair,
                                ordered flow. No more confusion about whose turn
                                it is.
                            </p>
                        </Card>

                        <Card variant="glass" className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-(--theme-primary)/20 flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-(--theme-text-primary)" />
                            </div>
                            <h3 className="text-xl font-semibold text-(--theme-text-primary) mb-2">
                                Real-time Updates
                            </h3>
                            <p className="text-(--theme-text-secondary)">
                                Get real-time updates on queue status, wait
                                times, and notifications when it's your turn.
                            </p>
                        </Card>

                        <Card variant="glass" className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-(--theme-primary)/20 flex items-center justify-center mb-4">
                                <BarChart3 className="h-6 w-6 text-(--theme-text-primary)" />
                            </div>
                            <h3 className="text-xl font-semibold text-(--theme-text-primary) mb-2">
                                Analytics Dashboard
                            </h3>
                            <p className="text-(--theme-text-secondary)">
                                Track queue performance, wait times, and
                                customer flow with detailed analytics and
                                insights.
                            </p>
                        </Card>

                        <Card variant="glass" className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-(--theme-primary)/20 flex items-center justify-center mb-4">
                                <Smartphone className="h-6 w-6 text-(--theme-text-primary)" />
                            </div>
                            <h3 className="text-xl font-semibold text-(--theme-text-primary) mb-2">
                                Mobile Friendly
                            </h3>
                            <p className="text-(--theme-text-secondary)">
                                Consumers can join queues and track their
                                position from any device, anywhere.
                            </p>
                        </Card>

                        <Card variant="glass" className="p-6">
                            <div className="h-12 w-12 rounded-lg bg-(--theme-primary)/20 flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-(--theme-text-primary)" />
                            </div>
                            <h3 className="text-xl font-semibold text-(--theme-text-primary) mb-2">
                                Secure & Reliable
                            </h3>
                            <p className="text-(--theme-text-secondary)">
                                Enterprise-grade security with role-based access
                                control and data encryption.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-(--theme-text-primary) sm:text-4xl">
                            Perfect for Every Industry
                        </h2>
                        <p className="mt-4 text-lg text-(--theme-text-secondary)">
                            QueuePoint adapts to your specific needs
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                emoji: "🏥",
                                title: "Hospitals",
                                desc: "Patient check-in and appointment queues",
                            },
                            {
                                emoji: "🏦",
                                title: "Banks",
                                desc: "Customer service and teller queues",
                            },
                            {
                                emoji: "🏢",
                                title: "Education",
                                desc: "Student services and administrative queues",
                            },
                            {
                                emoji: "💼",
                                title: "Businesses",
                                desc: "Reception and service desks",
                            },

                            {
                                emoji: "🏛️",
                                title: "Government",
                                desc: "Public service and document processing",
                            },
                            {
                                emoji: "🍽️",
                                title: "Restaurants",
                                desc: "Waitlist and reservation management",
                            },
                            {
                                emoji: "🎟️",
                                title: "Events",
                                desc: "Ticketing and entry management",
                            },
                            {
                                emoji: "🛍️",
                                title: "Retail",
                                desc: "Customer service and checkout queues",
                            },
                        ].map((item, i) => (
                            <Card
                                key={i}
                                variant="glass"
                                className="p-6 text-center"
                            >
                                <div className="text-4xl mb-3">
                                    {item.emoji}
                                </div>
                                <h3 className="text-lg font-semibold text-(--theme-text-primary) mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-(--theme-text-secondary)">
                                    {item.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-(--theme-primary)/10">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-(--theme-text-primary) sm:text-4xl mb-4">
                        Ready to eliminate wait times?
                    </h2>
                    <p className="text-lg text-(--theme-text-secondary) mb-8">
                        Join thousands of organizations that trust QueuePoint
                        for their queue management needs.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link to="/register">
                            <Button size="lg" className="gap-2">
                                Get Started <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="lg">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-(--theme-surface-border) bg-(--theme-surface) py-12">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-6 w-6 rounded bg-(--theme-primary) flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">
                                        Q
                                    </span>
                                </div>
                                <span className="font-semibold text-(--theme-text-primary)">
                                    QueuePoint
                                </span>
                            </div>
                            <p className="text-sm text-(--theme-text-muted)">
                                Modern queue management for physical spaces.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-(--theme-text-primary) mb-4">
                                Prduct
                            </h4>
                            <ul className="space-y-2 text-sm text-(--theme-text-muted)">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Demo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-(--theme-text-primary) mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm text-(--theme-text-muted)">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-(--theme-text-primary) mb-4">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-sm text-(--theme-text-muted)">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-(--theme-primary)"
                                    >
                                        Security
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-(--theme-surface-border) text-center text-sm text-(--theme-text-muted)">
                        © 2026 QueuePoint. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

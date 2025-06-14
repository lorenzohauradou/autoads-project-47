'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Eye, Wind, Fish } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Snorkeling Gear
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Technology
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-cyan-50 to-white py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/b0eaca43-d66b-4398-ab94-5d93b60a3a3e.jpg?"
                                    alt="TopMask Pro Full Face Snorkeling Mask - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/41aa9c79-e20c-4903-8c66-e150fa3bb6ba.jpg?"
                                        alt="TopMask Pro underwater view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/daada527-5bce-4077-94d8-479274053ca8.jpg?"
                                        alt="TopMask Pro features detail"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/26a88b9f-7c80-42ee-be79-584cba5fe656.jpg?"
                                        alt="TopMask Pro side view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/b0eaca43-d66b-4398-ab94-5d93b60a3a3e.jpg?"
                                        alt="TopMask Pro in use"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <Badge variant="secondary" className="text-xs font-medium bg-cyan-100 text-cyan-800">
                                        🏆 #1 on Google
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs font-medium bg-green-100 text-green-800">
                                        ⭐ TrustPilot Winner
                                    </Badge>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    TopMask Pro Full-Face Snorkeling Freedom
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(4,892 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Experience crystal-clear underwater vision with advanced CO2 safety technology. German-engineered for comfort and safety.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$79.99</span>
                                    <span className="text-xl text-slate-500 line-through">$129.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        38% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Wind, text: "CO2 Safety System" },
                                    { icon: Eye, text: "180° Panoramic View" },
                                    { icon: Shield, text: "Anti-Fog Technology" },
                                    { icon: Fish, text: "Prescription Compatible" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-all"
                                    >
                                        <feature.icon className="h-5 w-5 text-cyan-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Size Selection */}
                            <div className="space-y-3">
                                <span className="font-medium text-slate-700">Select Size:</span>
                                <div className="flex gap-3">
                                    <Button variant="outline" className="border-2 hover:border-cyan-500 hover:bg-cyan-50">S/M</Button>
                                    <Button variant="outline" className="border-2 border-cyan-500 bg-cyan-50">L/XL</Button>
                                    <Button variant="outline" className="border-2 hover:border-cyan-500 hover:bg-cyan-50">Kids</Button>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                                    >
                                        Dive Into Adventure - $79.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2 border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                                        Experience the Difference Now
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Worldwide</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Risk-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-slate-500">German Quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Strengths Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-cyan-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Why Choose TopMask Pro?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    title: "Advanced CO2 Safety System",
                                    description: "Innovative valve technology prevents CO2 buildup for safer breathing",
                                    icon: Wind,
                                },
                                {
                                    title: "Full Face Coverage",
                                    description: "Natural breathing through nose or mouth with anti-fog protection",
                                    icon: Eye,
                                },
                                {
                                    title: "Universal Comfort Fit",
                                    description: "Adjustable straps and soft silicone seal for extended wear",
                                    icon: Shield,
                                },
                            ].map((strength, i) => (
                                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                                    <CardContent className="pt-8 pb-6 text-center">
                                        <strength.icon className="h-12 w-12 mx-auto mb-4 text-cyan-600" />
                                        <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{strength.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Revolutionary Snorkeling Technology</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Crystal Clear Vision",
                                                    description: "Panoramic view with optional prescription lens compatibility (-6.0 to +6.0)",
                                                },
                                                {
                                                    title: "Family-Friendly Design",
                                                    description: "Available in multiple sizes and colors for adults and children",
                                                },
                                                {
                                                    title: "German Engineering",
                                                    description: "Premium materials and construction for lasting durability",
                                                },
                                                {
                                                    title: "Natural Breathing",
                                                    description: "Breathe naturally through nose or mouth underwater",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/41aa9c79-e20c-4903-8c66-e150fa3bb6ba.jpg?"
                                            alt="TopMask Pro features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "View Angle", value: "180° Panoramic" },
                                                { label: "Material", value: "Medical-grade Silicone" },
                                                { label: "Lens", value: "Shatterproof Polycarbonate" },
                                                { label: "Sizes", value: "S/M, L/XL, Kids" },
                                                { label: "Colors", value: "Blue, Black, Pink, Aqua" },
                                                { label: "Prescription", value: "-6.0 to +6.0 diopters" },
                                                { label: "Weight", value: "450g" },
                                                { label: "Warranty", value: "2 years" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x TopMask Pro Full-Face Snorkel Mask",
                                                "1x Waterproof Phone Case",
                                                "1x Mesh Carry Bag",
                                                "1x Anti-fog Spray",
                                                "1x User Manual",
                                                "1x Warranty Card",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-cyan-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 4,892 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "12%" : "3%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "4,158" : stars === 4 ? "587" : "147"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Emma Thompson",
                                                avatar: "ET",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for snorkeling!",
                                                content:
                                                    "I can finally breathe naturally underwater! The anti-fog really works and the CO2 system makes me feel safe. Best purchase ever!",
                                            },
                                            {
                                                name: "James Wilson",
                                                avatar: "JW",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Perfect for our family vacation",
                                                content:
                                                    "Bought 4 masks for our Maldives trip. Even my 8-year-old could use it easily. Crystal clear views of the coral reefs!",
                                            },
                                            {
                                                name: "Maria Garcia",
                                                avatar: "MG",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Worth every penny",
                                                content:
                                                    "As someone who wears glasses, the prescription lens option is amazing. German quality shows in every detail.",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-cyan-100 text-cyan-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How does the CO2 safety system work?",
                                                answer:
                                                    "Our innovative valve system separates inhaled and exhaled air, preventing CO2 buildup. Fresh air enters through the top while exhaled air exits through side channels.",
                                            },
                                            {
                                                question: "Can I use this if I wear glasses?",
                                                answer:
                                                    "Yes! We offer prescription lens inserts from -6.0 to +6.0 diopters. They easily clip into the mask for crystal clear underwater vision.",
                                            },
                                            {
                                                question: "Is it suitable for children?",
                                                answer:
                                                    "Absolutely! We have a dedicated kids size for ages 4-12. The safety features make it perfect for young snorkelers.",
                                            },
                                            {
                                                question: "How do I prevent fogging?",
                                                answer:
                                                    "The mask includes anti-fog coating and we provide anti-fog spray. The separate breathing channels also reduce fogging significantly.",
                                            },
                                            {
                                                question: "What's your return policy?",
                                                answer:
                                                    "We offer a 30-day money-back guarantee. If you're not completely satisfied, return it for a full refund - no questions asked.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Join Thousands of Satisfied Snorkelers Worldwide
                    </h2>
                    <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                        Experience the difference with TopMask Pro - The #1 choice according to Google and TrustPilot
                    </p>
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all bg-white text-cyan-700 hover:bg-cyan-50">
                        Dive Into Adventure Today!
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 TopMask. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
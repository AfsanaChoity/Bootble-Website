// SubscriptionPanel.jsx
"use client";

import AuthBtn from "@/UI/AuthBtn";
import Heading from "@/UI/Heading";
import Link from "node_modules/next/link";
import React from "react";

const plans = [
    { id: 1, title: "Free Plan", price: "$0/Month", emoji: "🧾" },
    { id: 2, title: "Monthly", price: "$0/Month", emoji: "🏅" },
    { id: 3, title: "Yearly", price: "$0/Month", emoji: "🏆" },
];

export default function SubscriptionPanel() {
    return (
        <div className=" ">
            <div className="max-w-md">
                <div className=" mb-6">
                    <Heading text="Subscription" />

                </div>

                <div className="space-y-4">
                    {plans.map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col gap-4 md:flex-row items-center justify-between bg-white rounded-xl shadow-sm px-4 py-3"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#eef6ff] flex items-center justify-center text-2xl">
                                    {p.emoji}
                                </div>

                                <div>
                                    <div className="text-xl font-josefin-sans font-semibold  text-[#3F3F3F]">{p.title}</div>
                                    <div className="text-lg font-josefin-sans font-semibold">{p.price}</div>
                                </div>
                            </div>

                            <Link href="/payment">
                                <AuthBtn text="Subscribe"/>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

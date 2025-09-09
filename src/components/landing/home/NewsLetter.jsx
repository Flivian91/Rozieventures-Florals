"use client";

import { useState } from "react";
import { Mail, Gift, Percent, Calendar } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-pink-400 py-20 px-6 text-center text-white overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          Stay in Bloom
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Get the latest <span className="font-semibold">floral trends</span>,
          exclusive offers, and seasonal arrangements delivered straight to your
          inbox.
        </p>

        {/* Input Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl shadow-md hover:bg-pink-100 transition"
          >
            Subscribe
          </button>
        </form>

        {/* Features */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-yellow-300" />
            <span>Exclusive Offers</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-yellow-300" />
            <span>Weekly Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-yellow-300" />
            <span>First Order Discount</span>
          </div>
        </div>
      </div>
    </section>
  );
}

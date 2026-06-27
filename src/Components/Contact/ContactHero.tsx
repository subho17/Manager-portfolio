"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <section className="relative min-h-[90vh] bg-gray-50 font-[family-name:var(--font-absans)] pt-16 pb-20 flex items-center justify-center">
            <div className="w-full">
            <div className="max-w-[1450px] mx-auto px-6 lg:px-20 mb-20 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#800080] font-black text-[10px] uppercase tracking-[0.5em]">
                        Connect With Us
                    </span>
                    <div className="w-12 h-[1px] bg-[#800080]/20" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-[-0.05em] leading-[0.9] text-center mb-6">
                    Let&apos;s Shape Your <span className="text-[#800080]">Future.</span>
                </h1>
                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-2xl text-center">
                  Want to join Lions International? Join us and become part of a global community dedicated to serving humanity.
                </p>
            </div>

            <div className="max-w-[900px] mx-auto px-6 lg:px-8 flex justify-center items-center">
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-full bg-white p-6 lg:p-12 rounded-[2rem] border border-gray-200 shadow-[0_40px_100px_rgba(0,0,0,0.04)]"
                >
                    <form className="space-y-8 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#800080]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#800080]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Your Message</label>
                            <textarea 
                                rows={4}
                                placeholder="Tell us about your academic goals..."
                                className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#800080]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                            />
                        </div>

                        <button className="w-full group relative overflow-hidden bg-gray-900 text-white rounded-lg py-5 transition-transform active:scale-[0.98]">
                            <div className="absolute inset-0 bg-[#800080] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10 text-xs font-black uppercase tracking-[0.3em]">Send Message</span>
                        </button>

                        <p className="text-center text-[10px] text-gray-300 font-medium">
                            By submitting, you agree to our <span className="underline cursor-pointer hover:text-gray-400 transition-colors">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-gray-400 transition-colors">Terms of Service</span>.
                        </p>
                    </form>
                </motion.div>
            </div>
            </div>
        </section>
    );
};

export default ContactHero;

"use client";

import { motion, type Variants } from "framer-motion";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}

export const SplitText = ({ text, className = "", delay = 0, stagger = 0.05 }: SplitTextProps) => {
    const letters = text.split("");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay
            },
        },
    };

    const childVariants: Variants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        },
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`inline-block overflow-hidden ${className}`}
        >
            {letters.map((char, i) => (
                <motion.span
                    key={`${char}-${i}`}
                    variants={childVariants}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

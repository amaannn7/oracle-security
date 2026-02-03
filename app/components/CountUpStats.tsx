"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
    num: string;
    label: string;
}

interface CountUpStatsProps {
    stats: StatItem[];
}

export default function CountUpStats({ stats }: CountUpStatsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
                <StatCounter key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
            ))}
        </div>
    );
}

interface StatCounterProps {
    stat: StatItem;
    isVisible: boolean;
    delay: number;
}

function StatCounter({ stat, isVisible, delay }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    // Special handling for "24/7" format
    const is24_7 = stat.num === "24/7";

    // Extract number from string (e.g., "1000+" -> 1000, "90%" -> 90, "50M" -> 50, "24/7" -> 24)
    const targetNumber = is24_7 ? 24 : parseInt(stat.num.replace(/[^\d]/g, ""));
    const suffix = is24_7 ? "/7" : stat.num.replace(/[\d]/g, "");

    useEffect(() => {
        if (isVisible && !hasStarted) {
            const timer = setTimeout(() => {
                setHasStarted(true);
                const duration = 2000; // 2 seconds
                const steps = 60;
                const increment = targetNumber / steps;
                const stepDuration = duration / steps;

                let currentStep = 0;
                const counter = setInterval(() => {
                    currentStep++;
                    if (currentStep >= steps) {
                        setCount(targetNumber);
                        clearInterval(counter);
                    } else {
                        setCount(Math.floor(increment * currentStep));
                    }
                }, stepDuration);

                return () => clearInterval(counter);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [isVisible, hasStarted, targetNumber, delay]);

    return (
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">
                {hasStarted ? count : 0}{suffix}
            </p>
            <p className="text-[#1e3a5f]/80 mt-2 font-medium">{stat.label}</p>
        </div>
    );
}

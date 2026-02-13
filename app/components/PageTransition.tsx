"use client";

import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(false);
        const t = requestAnimationFrame(() => setShow(true));
        return () => cancelAnimationFrame(t);
    }, [pathname]);

    return (
        <div
            className={`transition-all duration-500 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
        >
            {children}
        </div>
    );
}

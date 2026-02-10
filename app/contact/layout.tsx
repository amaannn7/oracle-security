import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Get in Touch with Oracle Services",
    description: "Contact Oracle Services (Pvt) Ltd for security, care, and logistics inquiries. Located at No. 16/1, Wanatha Road, Gangodawila, Nugegoda. Call us or send a message today.",
    keywords: ["contact Oracle Services", "Oracle Services phone number", "Oracle Services address", "security services inquiry", "get a quote", "Nugegoda security company"],
    openGraph: {
        title: "Contact Oracle Services (Pvt) Ltd",
        description: "Get in touch for security, care, and logistics inquiries. Located in Nugegoda, Sri Lanka.",
        url: "https://oracleservices.lk/contact",
        images: [{ url: "/oracle.png", width: 1200, height: 630, alt: "Contact Oracle Services" }],
    },
    alternates: {
        canonical: "https://oracleservices.lk/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

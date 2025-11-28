import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "CodeCraft Portfolio",
    description: "A modern full-stack developer portfolio",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <div className="flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}

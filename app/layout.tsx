import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Jain — Backend Engineer & Full Stack Developer",
  description:
    "Backend Developer with 2+ years of experience building scalable APIs and workflow-driven systems. Currently at Texas Instruments, Bengaluru.",
  keywords: [
    "Akshat Jain",
    "Backend Developer",
    "Full Stack Developer",
    "FastAPI",
    "Node.js",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
    "Texas Instruments",
  ],
  authors: [{ name: "Akshat Jain" }],
  creator: "Akshat Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Akshat Jain — Backend Engineer",
    description:
      "Backend Developer with 2+ years of experience building scalable APIs and workflow-driven systems.",
    siteName: "Akshat Jain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Jain — Backend Engineer",
    description:
      "Backend Developer with 2+ years of experience building scalable APIs and workflow-driven systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050510] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

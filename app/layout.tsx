import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Developer OS | Your Coding Life, Organized",
  description:
    "Developer OS: The ultimate productivity workspace designed for software engineers. Manage your coding workflow, track projects, and solve programming challenges in one place.",
  keywords: [
    "Developer OS",
    "Developer Productivity Tool",
    "Coding Workflow Optimization",
    "Programmer OS",
    "Dev Life Organizer",
    "Software Engineer Toolkit",
    "Code Problem Solver",
    "Debugging Assistant",
    "Developer Roadmap",
    "Tech Stack Management",
    "Programming Focus Mode",
    "Project Management for Devs",
    "Daily Dev Routine",
    "Coding Habit Tracker",
    "Software Development Lifecycle Tool",
    "Snippet Manager",
    "Code Documentation Organizer",
    "Task Management for Coders",
    "Agile Developer Tools",
    "VS Code Companion App",
    "ديفلوبير أوس",
    "نظام تشغيل المبرمج",
    "تنظيم حياة المبرمج",
    "حل مشكلات البرمجة",
    "زيادة إنتاجية المبرمجين",
    "تنظيم مشاريع البرمجة",
    "أدوات المطورين",
    "خارطة طريق المبرمج",
    "تنظيم وقت المبرمج",
    "بيئة عمل المبرمج",
    "إدارة مهام المبرمجين",
    "مجتمع المبرمجين",
    "تطوير البرمجيات بسلاسة",
    "مساعد البرمجة الذكي",
    "تنظيم الأكواد",
    "حلول برمجية مبتكرة",
    "حياة المبرمج اليومية",
    "أدوات مهندس البرمجيات",
    "التركيز أثناء البرمجة",
    "ترتيب المهام البرمجية",
    "Developer OS App",
    "Full Stack Life",
    "Backend Workflow",
    "Frontend Management",
    "DevOps Organizer",
    "تطبيق مبرمجين",
    "تنظيم سبرينتات البرمجة",
    "Dev Tooling 2026",
  ],
  authors: [{ name: "Kerolos Adel", url: "https://kerolos-adel.vercel.app" }],
  creator: "Kerolos Adel",
  publisher: "Kerolos Adel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developer-os.vercel.app",
    title: "Developer OS | Your Coding Life, Organized",
    description:
      "المنصة المتكاملة لتنظيم حياة المبرمجين، حل المشكلات البرمجية، وزيادة الإنتاجية. رتب مهامك، أكوادك، ومسيرتك المهنية في مكان واحد.",
    siteName: "Developer OS",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Developer OS - The Ultimate Workspace for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer OS | Your Coding Life, Organized",
    description:
      "Stop the coding chaos. Manage your workflow and solve problems faster with Developer OS.",
    images: ["/og-image.webp"],
    creator: "@kerolos_adel",
  },
  alternates: {
    canonical: "https://developer-os.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "LFEZoVO9eWOt-aK-ReodWx0JuVvh7pH5riWOMFKBOKw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="./logo.ico" type="image/x-icon" />
      </head>
      <body>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

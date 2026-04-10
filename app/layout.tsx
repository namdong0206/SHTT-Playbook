import type {Metadata} from 'next';
import './globals.css';
import { Newsreader, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans" 
});
const newsreader = Newsreader({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: 'Playbook Explorer - Sở hữu Trí tuệ',
  description: 'Hệ thống tra cứu và phân tích chuyên sâu về Sở hữu Trí tuệ Việt Nam',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={cn("font-sans", manrope.variable, newsreader.variable)}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "JetBrains Mono Font Setup",
  description: "Font applied globally via className",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition />
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import "./globals.css";

const loveYaFont = Love_Ya_Like_A_Sister({
  weight: "400",  // Adjust weight if needed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentines Day",
  description: "Happy Valentines Day Pookie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loveYaFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

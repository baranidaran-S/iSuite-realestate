import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Tamil, Poppins } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "iSuite AI — Property Enquiry-யிலிருந்து Site Visit வரை",
  description:
    "Real Estate-க்கான AI Sales System. WhatsApp enquiry-க்கு seconds-ல் reply, buyer qualification, site visit booking, salesperson handover மற்றும் follow-up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ta" className={`${notoSans.variable} ${notoTamil.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}

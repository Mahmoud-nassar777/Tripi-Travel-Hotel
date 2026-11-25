import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Poppins({
    weight:['100','200','300','400','500','600','700','800','900'],
    subsets:['latin']
})

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Travel For You | Next js",
    description: "Travel Landing page using next js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={` ${font.className} antialiased`}
        >
            <body className="min-h-full flex flex-col"> 
                <ResponsiveNav/>
                {children}
                <Footer/>
                <ScrollToTop/>
            </body>
        </html>
    );
}

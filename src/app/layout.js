import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/contexts/AuthProvider";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/ThemeProvider";
import InitData from "@/components/InitData";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prodify - Product Management App",
  description: "Manage, organize and track your products effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="min-h-screen mx-auto py-10">
                <InitData />
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>

          <ToastContainer position="top-right" autoClose={2000} />
        </ThemeProvider>
      </body>
    </html>
  );
}

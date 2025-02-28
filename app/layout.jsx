import Navbar from "@/components/Navbar";
import "./global.css";
import { poppins, roboto } from "./fonts";

export const metadata = {
    title: "Belajar Next.js Fundamental",
    description: "Belajar Next.js dengan struktur App Router",
};

export default async function Layout({ children }) { 
    return (
        <>
            <html lang="en" className={ `${poppins.variable} ${roboto.variable}` }>
                <body className="flex flex-col p-5 min-h-screen bg-cyan-50">
                    <header className="font-roboto">
                        <Navbar />                        
                    </header>
                    <main className="py-5 grow font-poppins">
                        {children}
                    </main>
                    <footer className="border-t py-3 text-center text-xs font-roboto">
                        <span>I'm here to stay (Footer)</span>
                    </footer>
                </body>
            </html>
        </>
    )
 };
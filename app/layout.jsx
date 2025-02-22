import Navbar from "../components/Navbar";
import "./global.css";

export const metadata = {
    title: "Belajar Next.js Fundamental",
    description: "Belajar Next.js dengan struktur App Router",
};

export default async function Layout({ children }) { 
    return (
        <>
            <html>
                <body className="flex flex-col p-5 min-h-screen bg-cyan-50">
                    <header>
                        <Navbar />                        
                    </header>
                    <main className="py-5 grow">
                        {children}
                    </main>
                    <footer className="border-t py-3 text-center text-xs">
                        <span>I'm here to stay (Footer)</span>
                    </footer>
                </body>
            </html>
        </>
    )
 };
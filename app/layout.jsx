import Link from "next/link";
import "./global.css";

export const metadata = {
    title: "Belajar Next.js Fundamental",
    description: "Belajar Next.js dengan struktur App Router",
};

export default async function Layout({ children }) { 
    return (
        <>
            <html>
                <body className="flex flex-col p-5 min-h-screen">
                    <header>
                        <nav>
                            <ul className="flex gap-5">
                                <li><Link href={"/"}>Home</Link></li>
                                <li><Link href={"/blog"}>Blog</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                                <li><Link href={"/about"}>About</Link></li>
                            </ul>
                        </nav>
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
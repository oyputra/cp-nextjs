import Link from "next/link";

export const metadata = {
    title: "Belajar Next.js Fundamental",
    description: "Belajar Next.js dengan struktur App Router",
};

export default async function Layout({ children }) { 
    return (
        <>
            <html>
                <body>
                    <header>
                        <nav>
                            <ul>
                                <li><Link href={"/"}>Home</Link></li>
                                <li><Link href={"/blog"}>Blog</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                                <li><Link href={"/about"}>About</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        {children}
                    </main>
                    <footer>
                        <hr />
                        <span>I'm here to stay (Footer)</span>
                    </footer>
                </body>
            </html>
        </>
    )
 };
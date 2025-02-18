// import { usePathname } from "next/navigation";

export const metadata = {
    title: "Belajar Next.js Fundamental",
    description: "Belajar Next.js dengan struktur App Router",
};

export default async function Layout({ children }) { 
    return (
        <>
            <html>
                <body>
                    <header>[header]</header>
                    <main>
                        {children}
                    </main>
                    <footer>[footer]</footer>
                </body>
            </html>
        </>
    )
 };
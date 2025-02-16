export const metadata = {
    title: "Belajar Next.js Fundamental",
    description: "Belajar Next.js dengan struktur App Router",
};

export default function Layout({ children }) { 
    return (
        <html lang="en">
            <body>
                <header>[header]</header>
                <main>
                    {children}
                </main>
                <footer>[footer]</footer>
            </body>
        </html>
    )
 };
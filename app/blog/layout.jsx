"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function BlogLayout({ children })
{
    useEffect(() => {
        window.confirm("Do you want to enter the blog page?");
    }, []);
    console.log('Production Mode: gunakan npm run build & npm start. agar semua modul sudah dirender dalam file .next, sehingga lebih ringan dalam mode prodcution! kalau npm run dev, semua modul dirender terus!');
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ border: '1px solid black' }}>
                    Sidebar
                </div>
                <div>{children}</div>
            </div>
            <p>List of Posts</p>
            <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/blog/belajar-nextjs"}>Belajar Next Js</Link></li>
                <li><Link href={"/blog/judul-berita"}>Judul Berita</Link></li>
                <li><Link href={"/blog/latihan-route-next"}>Latihan Route Next</Link></li>
            </ul>
        </>
    );
}
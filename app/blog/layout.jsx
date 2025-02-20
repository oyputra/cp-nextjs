"use client";
import { useEffect } from "react";

export default function BlogLayout({ children })
{
    useEffect(() => {
        window.alert("Hello client side!");
    }, []);
    console.log('Production Mode: gunakan npm run build & npm start. agar semua modul sudah dirender dalam file .next, sehingga lebih ringan dalam mode prodcution! kalau npm run dev, semua modul dirender terus!');
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: '1px solid black' }}>
                Sidebar
            </div>
            <div>{children}</div>
        </div>
    );
}
"use client";
import { useEffect } from "react";

export default function BlogLayout({ children })
{
    useEffect(() => {
        window.alert("Hello client side!");
    }, []);
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: '1px solid black' }}>
                Sidebar
            </div>
            <div>{children}</div>
        </div>
    );
}
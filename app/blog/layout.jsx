"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function BlogLayout({ children })
{
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                    <ul className="flex flex-col gap-3 pr-5 text-gray-700">
                        <p>List of Posts :</p>
                        <li><Link href={"/blog"} className="hover:bg-blue-100 hover:border border border-transparent hover:text-blue-900 hover:border-blue-200 rounded-md p-3 block">Blog</Link></li>
                        <li><Link href={"/blog/belajar-nextjs"} className="hover:bg-blue-100 hover:border border border-transparent hover:text-blue-900 hover:border-blue-200 rounded-md p-3 block">Belajar Next Js</Link></li>
                        <li><Link href={"/blog/judul-berita"} className="hover:bg-blue-100 hover:border border border-transparent hover:text-blue-900 hover:border-blue-200 rounded-md p-3 block">Judul Berita</Link></li>
                        <li><Link href={"/blog/latihan-route-next"} className="hover:bg-blue-100 hover:border border border-transparent hover:text-blue-900 hover:border-blue-200 rounded-md p-3 block">Latihan Route Next</Link></li>
                    </ul>
                </div>
                <div className="col-span-10">{children}</div>
            </div>
        </>
    );
}
import Heading from "@/components/Heading";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const metadata = {
    title: "Belajar Next.js - Belajar Next.js Fundamental"
}

export default async function BelajarNextJs() {
    const text = await readFile("content/blog/belajar-nextjs.md", "utf8");
    const { data: { title, image, date, author }, content } = matter(text)    
    console.log(title, image, date, author, content);
    const html = marked(content);
    return (
        <>
            <Heading>{title}</Heading>
            <p className="text-sm mb-5 text-gray-500">{author} - {date}</p>
            <img src={image} alt="" width={640} height={360} className="mb-5 rounded-xl" />
            <article dangerouslySetInnerHTML={{ __html: html }} className="prose max-w-screen-sm prose-slate" />
        </>
    );
}
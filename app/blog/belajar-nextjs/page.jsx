import Heading from "@/components/Heading";
import { readFile } from "fs/promises";
import path from "path";

export const metadata = {
    title: "Belajar Next.js - Belajar Next.js Fundamental"
}

export default async function BelajarNextJs() {
    const filePath = path.resolve(process.cwd(), "content/blog/belajar-nextjs.md");
    let text = "";
    try {
        text = await readFile(filePath, "utf8");
    } catch (error) {
        console.error("Error reading file:", error);
        text = "Gagal memuat konten.";
    }
    return (
        <>
            <Heading>Belajar Next.js</Heading>
            <p>{text}</p>
            <img src="/images/landing5.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
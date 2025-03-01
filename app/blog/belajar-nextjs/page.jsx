import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export const metadata = {
    title: "Belajar Next.js - Belajar Next.js Fundamental"
}

export default async function BelajarNextJs() {
    const post = await getPost("belajar-nextjs");

    return (
        <>
            <Heading>{post.title}</Heading>
            <p className="text-sm mb-5 text-gray-500">{post.author} - {post.date}</p>
            <img src={post.image} alt="" width={640} height={360} className="mb-5 rounded-xl" />
            <article dangerouslySetInnerHTML={{ __html: post.body }} className="prose max-w-screen-sm prose-slate" />
        </>
    );
}
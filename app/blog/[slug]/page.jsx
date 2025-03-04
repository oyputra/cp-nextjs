import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = params;
    try {
        const post = await getPost(slug);
        return {
            title: post.title,
            description: post.description,
        }
    } catch (error) {
        return {
            title: "Post Tidak Ditemukan",
            description: "Maaf, konten yang Anda cari tidak tersedia.",
        };
    }
}

export default async function PostPage({ params }) {    
    const { slug } = await params;
    try {
        const post = await getPost(slug);
        return (
            <>
                <Heading>{post.title}</Heading>
                <p className="text-sm mb-5 text-gray-500">{post.author} - {post.date}</p>
                <img src={post.image} alt="" width={640} height={360} className="mb-5 rounded-xl" />
                <article dangerouslySetInnerHTML={{ __html: post.body }} className="prose max-w-screen-sm prose-slate" />
            </>
        );
    } catch (error) {
        notFound();
    }
}
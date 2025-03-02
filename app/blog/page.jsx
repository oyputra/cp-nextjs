import Card from "@/components/Card";
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const metadata = {
    title: "Blog - Belajar Next.js Fundamental"
}

export default async function Blog() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <>
            <Heading>Blog</Heading>
            <p className="text-xl mb-3">List of Post</p>
            <div className="grid xl:grid-cols-4 gap-4 mb-20">
                <Card
                    srcImage={"/images/landing5.jpg"}
                    title={"Belajar Next.js"}
                    description={"Membuat e-commerce from zero to hero"}
                    link={"/blog/belajar-nextjs"}
                />
                <Card
                    srcImage={"/images/landing6.jpg"}
                    title={"Judul Berita"}
                    description={"Berita terbaru dari judul-judul berita yang relevan"}
                    link={"/blog/judul-berita"}
                />
                <Card
                    srcImage={"/images/landing7.jpg"}
                    title={"Latihan Route Next"}
                    description={"Membuat route pada next js dengan perbedaan-perbedaan metodenya"}
                    link={"/blog/latihan-route-next"}
                />
            </div>

            <div>
                {posts.map((post, index) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        href=""
                        image={post.image}
                        description=""
                        date={post.date}
                        author={post.author}
                    />
                ))}
            </div>
        </>
    );
}
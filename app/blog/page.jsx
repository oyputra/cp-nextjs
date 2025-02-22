import Card from "@/components/Card";
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

export const metadata = {
    title: "Blog - Belajar Next.js Fundamental"
}

export default function Blog() {
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
                <PostCard
                    title={"Belajar Next.js"}
                    href={"/blog/belajar-nextjs"}
                    image={"/images/landing5.jpg"}
                    description={"Membuat e-commerce from zero to hero"}
                    date={"23-02-2025"}
                    author={"@oyputra"}
                />
                <PostCard
                    title={"Judul Berita"}
                    href={"/blog/judul-berita"}
                    image={"/images/landing6.jpg"}
                    description={"Berita terbaru dari judul-judul berita yang relevan"}
                    date={"23-02-2025"}
                    author={"@oyputra"}
                />
                <PostCard
                    title={"Latihan Route Next"}
                    href={"/blog/latihan-route-next"}
                    image={"/images/landing7.jpg"}
                    description={"Membuat route pada next js dengan perbedaan-perbedaan metodenya"}
                    date={"23-02-2025"}
                    author={"@oyputra"}
                />
            </div>
        </>
    );
}
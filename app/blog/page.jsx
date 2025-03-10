import Card from "@/components/Card";
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const metadata = {
    title: "Blog"
}

export default async function Blog() {
    const posts = await getAllPosts();
    return (
        <>
            <Heading>Blog</Heading>
            <p className="text-xl mb-3">List of Post</p>
            <div className="grid xl:grid-cols-4 gap-4 mb-20">
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        slug={`/blog/${post.slug}`}
                        date={post.date}
                        author={post.author}
                    />
                ))}
            </div>

            <div>
                {posts.map((post, index) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        slug={`/blog/${post.slug}`}
                        date={post.date}
                        author={post.author}
                    />
                ))}
            </div>
        </>
    );
}
import Heading from "@/components/Heading";

export const metadata = {
    title: "Blog - Belajar Next.js Fundamental"
}

export default function Blog() {
    return (
        <>
            <Heading>Blog</Heading>
            <p>Halaman Blog</p>
            <img src="/images/landing3.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
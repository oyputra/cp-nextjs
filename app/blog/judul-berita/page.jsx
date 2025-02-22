import Heading from "@/components/Heading";

export const metadata = {
    title: "Latihan Route Next - Belajar Next.js Fundamental"
}

export default function JudulBerita() {
    return (
        <>
            <Heading>Judul Berita</Heading>
            <p>Halaman Judul Berita</p>
            <img src="/images/landing6.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
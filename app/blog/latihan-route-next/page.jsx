import Heading from "@/components/Heading";

export const metadata = {
    title: "Judul Berita - Belajar Next.js Fundamental"
}

export default function LatihanRouteNext() {
    return (
        <>
            <Heading>Latihan Route Next</Heading>
            <p>Halaman Latihan Route Next</p>
            <img src="/images/landing7.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
import Heading from "@/components/Heading";

export const metadata = {
    title: "Belajar Next.js - Belajar Next.js Fundamental"
}

export default function BelajarNextJs() {
    return (
        <>
            <Heading>Belajar Next.js</Heading>
            <p>Halaman Belajar Next.js</p>
            <img src="/images/landing5.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
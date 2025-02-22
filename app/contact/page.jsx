import Heading from "@/components/Heading";

export const metadata = {
    title: "Kontak - Belajar Next.js Fundamental"
}

export default function Contact() {
    return (
        <>
            <Heading>Kontak</Heading>
            <p>Halaman Kontak</p>
            <img src="/images/landing4.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
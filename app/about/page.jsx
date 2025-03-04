import Heading from "@/components/Heading";

export const metadata = {
    title: "Tentang"
}

export default function About() {
    return (
        <>
            <Heading>Tentang</Heading>
            <p>Halaman Tentang</p>
            <img src="/images/landing2.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
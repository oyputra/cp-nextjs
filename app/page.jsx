import Heading from "@/components/Heading";
export default function Home() {
    return (
        <>
            <Heading>Framework Next.js</Heading>
            <p>Hello, World!</p>
            <img src="/images/landing1.jpg" alt="" width={640} height={360} className="my-3 rounded-xl" />
        </>
    );
}
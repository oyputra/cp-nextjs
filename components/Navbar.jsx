import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-5">
                <li><Link href={"/"} className="text-gray-500 hover:underline">Home</Link></li>
                <li><Link href={"/blog"} className="text-gray-500 hover:underline">Blog</Link></li>
                <li><Link href={"/contact"} className="text-gray-500 hover:underline">Contact</Link></li>
                <li><Link href={"/about"} className="text-gray-500 hover:underline">About</Link></li>
            </ul>
        </nav>
    )
}
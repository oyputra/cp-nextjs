import Link from "next/link";

export default function Card({ srcImage, title, description, link }) {
    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <img className="rounded-t-lg" src={srcImage} alt="" />
            <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                <p className="font-normal text-gray-700 mb-3">{description}</p>
                <Link href={link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Read more
                </Link>
            </div>
        </div>
    )
}
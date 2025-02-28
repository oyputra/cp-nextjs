import { roboto } from "@/app/fonts";
import { poppins } from "@/app/fonts";

export default function Heading({ children }) {
    return (
        <h1 className={`text-2xl font-black pb-3 ${poppins.className}`}>{children}</h1>
    )
}
import { Roboto, Poppins } from "next/font/google";

export const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
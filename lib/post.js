import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
    const text = await readFile(`content/blog/${slug}.md`, "utf8");
    const { data: { title, image, date, author }, content } = matter(text)    
    const body = marked(content);

    return {title, image, date, author, body};
}
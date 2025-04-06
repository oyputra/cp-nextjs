import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import qs from 'qs';

const BACKEND_URL = "http://localhost:1337";

export async function getPost(slug) {
    const text = await readFile(`content/blog/${slug}.md`, "utf8");
    const { data: { title, description, image, date, author }, content } = matter(text)    
    const body = marked(content);

    return {slug, description, title, image, date, author, body};
}

export async function getAllPosts() {
    const url = `${BACKEND_URL}/api/posts?` + qs.stringify(
        { 
            fields: ["slug", "title", "description", "publishedAt", "author", "body"],
            populate: { 
                image: {
                fields: ["url"]
                } 
            },
            sort: ["publishedAt:desc"],
            pagination: {
                pageSize: 3
            }
        },
        { encodeValuesOnly: true },
    );
    const response = await fetch(url);
    const { data } = await response.json();
    console.log("data", data)
    return data.map(( item ) => ({
        slug: item.slug,
        title: item.title,
        description: item.description,
        author: item.author,
        date: item.publishedAt.slice(0, "yyyy-mm-dd".length),
        image: BACKEND_URL + item.image.url,
    }));
}

export async function getSlugs() {
    const files = await readdir("./content/blog");
    return files
            .filter((file) => file.endsWith(".md"))
            .map((file) => file.slice(0, - ".md".length));
}
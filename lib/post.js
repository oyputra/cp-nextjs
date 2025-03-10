import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
    const text = await readFile(`content/blog/${slug}.md`, "utf8");
    const { data: { title, description, image, date, author }, content } = matter(text)    
    const body = marked(content);

    return {slug, description, title, image, date, author, body};
}

export async function getAllPosts() {
    const slugs = await getSlugs();
    const posts = [];
    for (const slug of slugs) {
        const post = await getPost(slug);
        posts.push(post);
    }
    return posts;
}

export async function getSlugs() {
    const files = await readdir("./content/blog");
    return files
            .filter((file) => file.endsWith(".md"))
            .map((file) => file.slice(0, - ".md".length));
}
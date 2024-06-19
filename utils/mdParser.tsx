import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export const slugs: string[] = [];
// Utility function to generate a slug from a title
export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

export interface FrontMatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface ParsedPost {
  slug: string;
  frontMatter: FrontMatter;
  htmlContent: string;
}
export async function parsePostData(postsDir: string) {
  // Read all Markdown files in the directory
  const postFiles = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"));

  // Array to store parsed posts
  const parsedPosts: ParsedPost[] = [];

  // Function to process each post
  const processPost = async (filePath: string) => {
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Parse the front matter using gray-matter
    const { data, content } = matter(fileContent);

    // Generate the slug
    const slug = generateSlug(data.title);
    slugs.push(slug);
    // Parse the Markdown content using remark
    const file = (await remark().use(html).process(content)).toString();

    // const processedHtml = file.replace(/<img(.*?)src="(.*?)"(.*?)>/g,(match, p1, p2, p3) => {return `<Image${p1}src="${p2}"${p3} />`;});
    // Store the post data
    const parsedPost: ParsedPost = {
      slug,
      frontMatter: data as FrontMatter,
      htmlContent: file,
    };

    parsedPosts.push(parsedPost);
  };

  const processAllPosts = async () => {
    await Promise.all(
      postFiles.map((file) => processPost(path.join(postsDir, file)))
    );

    // Optionally save the parsed posts to a JSON file or database
    fs.writeFileSync(
      "posts/parsedPosts.json",
      JSON.stringify(parsedPosts, null, 2)
    );
    console.log("All posts processed and saved.");
  };

  processAllPosts().catch((error) => {
    console.error("Error processing posts:", error);
  });
}

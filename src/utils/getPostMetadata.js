import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const folder = "src/" + basePath + "/";
  const files = fs.readdirSync(folder);
  const markDownPost = files.filter((file) => file.endsWith(".md"));

  //get the file data

  const posts = markDownPost.map((fileName) => {
    const fileContent = fs.readFileSync(`src/${basePath}/${fileName}`, "utf-8");
    const matterResult = matter(fileContent);

    return {
      cardTitle: matterResult.data.cardTitle,
      cardDescription: matterResult.data.cardDescription,
      image: matterResult.data.image,
      alt: matterResult.data.alt,
      title: matterResult.data.title,
      category: matterResult.data.category,
      catBgColor: matterResult.data.catBgColor,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}

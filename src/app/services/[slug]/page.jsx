import React from "react";
import styles from "./singlePage.module.css";
import MenuCategory from "@/components/menuCategory/MenuCategory";
import ServicesMenu from "@/components/servicesMenu/ServicesMenu";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import path from 'path';
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPostMetadata";
import Image from "next/image";

const getPostContent = (slug) => {
  const filePath = path.join(process.cwd(), 'src/services', `${slug}.md`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { data, content };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("services");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " | " + params?.slug : "";
  return {
    title: `GTG Solution ${id.replace("-", " ")}`,
  };
}

const SinglePage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  if (!post) {
    return <div>Content not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.data.title}</h1>
      <div className={styles.blogContainer}>
        <div className={styles.articleContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={post.data.image}
              alt={post.data.alt}
              fill
              sizes="(max-width: 1024px) 100vw"
              className={styles.img}
            />
          </div>
          <article>
            <Markdown className={"article"}>{post.content}</Markdown>
          </article>
        </div>
        <div className={styles.content}>
          <div className={styles.post}></div>
          <h4 className={styles.subtitle}>{"What's Hot?"}</h4>
          <h2 className={styles.lightTitle}>Most Popular</h2>
          <ServicesMenu />

          <h4 className={styles.subtitle}>{"Discover by Topic"}</h4>
          <h2 className={styles.lightTitle}>Categories</h2>
          <MenuCategory />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
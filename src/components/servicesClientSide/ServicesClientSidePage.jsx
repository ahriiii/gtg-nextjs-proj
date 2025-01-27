"use client";
import styles from "./services.module.css";
import CategoryList from "../categoryList/CategoryList";
import Card from "@/components/card/Card";
import { useState } from "react";

export default function ServicesPageClient({ postMetadata }) {
    const groupedPosts = postMetadata.reduce((acc, post) => {
        if (!acc[post.category]) {
            acc[post.category] = { posts: [], catBgColor: post.catBgColor, category: post.category };
        }
        acc[post.category].posts.push(post);
        return acc;
    }, {});

    const categories = Object.keys(groupedPosts);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredPosts = selectedCategory
        ? groupedPosts[selectedCategory].posts
        : postMetadata;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Professional Plumbing Services for Peace of Mind</h1>
            <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                groupedPosts={groupedPosts}
            />
            {/* Render the filtered posts */}
            {filteredPosts.map((post, index) => (
                <Card key={index} post={post} />
            ))}
        </div>
    );
}

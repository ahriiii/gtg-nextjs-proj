import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = ({ categories, selectedCategory, setSelectedCategory, groupedPosts }) => {
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if the same category is clicked again
    } else {
      setSelectedCategory(category); // Select the new category
    }
  };

  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <button
          className={`${styles.category} ${styles[groupedPosts[category].category] || ''}`}
          key={index}
          onClick={() => handleCategoryClick(category)}
          style={{
            fontWeight: selectedCategory === category ? "bold" : "normal",
            backgroundColor: selectedCategory === category ? '#' + `${groupedPosts[category].catBgColor}` : '',
          }}
        >
          {category}
        </button>
      ))
      }
    </div >
  );
};

export default CategoryList;

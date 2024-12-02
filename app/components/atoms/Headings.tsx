"use client";

import { useEffect, useState } from "react";

const Headings = () => {
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        const titles = data.posts.map((post: { title: string }) => post.title);
        setTitles(titles);
      } catch (error) {
        console.error("Error fetching data:", error);
        setTitles(["Default Title"]);
      }
    };

    fetchTitles();
  }, []);

  return (
    <div>
      <h1 className="text-white font-extrabold text-4xl leading-normal">
        {titles.length > 0 ? titles[0] : "Loading..."}
      </h1>
    </div>
  );
};

export default Headings;

"use client";
// 引入
import { Button } from "@/components/ui/button";
import { BlogPostCard } from "@/components/blog-post-card";
// 引入 Next.js 的 Link 组件
import Link from "next/link";
// 引入必要的依赖
import { useState, useEffect } from "react";
import { createdList } from "@/api/page";

interface Item {
  id: number;
  name: string;
}

export default function Home() {
  const [stor, setStro] = useState<Item[]>([]);
  // 模拟博客文章数据
  useEffect(() => {
    // 初始化数据
    const fetchData = async () => {
      const List = await createdList();
      setStro(List);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            分享关于 Web 开发、设计和技术的见解和教程
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/blog/create">
            <Button size="lg">创建新文章</Button>
          </Link>
          <div></div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">最新文章</h2>
        <div>
          {stor?.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

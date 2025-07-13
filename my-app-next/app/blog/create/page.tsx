"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createProduct } from "@/api/page";
// 路由引入
import Router from 'next/router'


export default function Created() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 这里会处理登录逻辑
    // 在实际应用中，这里会发送请求到后端 API
  };
  const onSubimt = async () => {
    const params = {
      title: title,
      excerpt: excerpt,
      date: date,
      author: author,
      name: author,
    };
    await createProduct(params).then(res => {
      console.log(res, 'res')
      Router.push('/')
   })
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">新增</CardTitle>
        </CardHeader>
        {/* 内容 */}
        <form action="" onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title">标题</label>
              <Input
                id="title"
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="标题"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="excerpt">内容</label>
              <Input
                id="excerpt"
                type="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="author">姓名</label>
              <Input
                id="author"
                type="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="姓名"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="date">时间</label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </CardContent>
        </form>
        {/* 脚 */}
        <CardFooter>
          {/* <Link href="/">
          </Link> */}
            <Button type="submit" onClick={onSubimt}>
              提交
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

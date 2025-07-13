"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里会处理登录逻辑
    // 在实际应用中，这里会发送请求到后端 API
    alert(`登录尝试：${email}`);
  };
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-cente">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">登录</CardTitle>
          <CardDescription>登录您的账户以管理您的博客</CardDescription>
        </CardHeader>
        {/* 表单 */}
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">电子邮箱</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password">密码</label>
                <Link href="">忘记密码?</Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit">登录</Button>
            <div className="text-center text-sm">
              还没有账户?{" "}
              <Link href="/register" className="text-primary hover:underline">
                注册
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

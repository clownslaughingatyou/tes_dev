//
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";



interface Post {
  id?: number
  title?: string
  excerpt?: string
  date?: string
  author?: string
  slug?: string
  name?: string
}
interface BlogPostCardProps {
  post: Post
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-1">
          {post.date} · {post.author} . {post.name}
        </div>
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-bold">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            阅读全文
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
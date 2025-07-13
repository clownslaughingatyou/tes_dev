// 引入必要的依赖
import { createClient } from "@/lib/supabase/server";

export default async function Stars() {
  // 创建 Supabase 客户端
  const supabase = await createClient();

  // 从 Supabase 获取数据
  const { data: star, error } = await supabase.from("star").select();

  // 错误处理
  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }

  // 渲染数据
  return <pre>{JSON.stringify(star, null, 2)}</pre>;
}

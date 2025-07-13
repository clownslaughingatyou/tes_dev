// 引入必要的依赖
import { createClient } from "@/lib/supabase/client";

type StarData = {
  // Replace these fields with the actual columns of your "star" table
  id?: number;
  name: string;
  // Add other fields as needed
  d?: never; // 明确标记不存在的列
};

// 数据列表数据
export const createdList = async () => {
  // 创建 Supabase 客户端
  const supabase = await createClient();
  // 从 Supabase 获取数据
  const { data: star, error } = await supabase.from("star").select();
  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
  return star;
};

export const createProduct = async (dataFrom: StarData) => {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("star")
      .insert([dataFrom])
      .select()
      .single();
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "未知错误",
    };
  }
};
//

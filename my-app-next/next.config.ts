import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    modules: ['@nuxtjs/supabase'],
   // 自定义配置_
   supabase: {
     redirect: false,// https://supabase.nuxtjs.org/get-started#redirect_
   },
};

export default nextConfig;

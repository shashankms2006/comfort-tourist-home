import type { ImageLoaderProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: ImageLoaderProps): string {
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
}

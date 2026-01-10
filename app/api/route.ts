import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "default-tag";
  revalidateTag(name, "max");
  return new Response("Revalidation triggered");
}

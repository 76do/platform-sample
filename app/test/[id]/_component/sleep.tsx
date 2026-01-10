import { cacheTag } from "next/cache";

export default async function Sleep({ id }: { id: string }) {
  "use cache";
  cacheTag(`tag-${id}`);

  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <div>Sleep Component with ID: {id}</div>;
}

import { cacheTag } from "next/cache";

export default async function Sleep() {
  "use cache: remote";
  cacheTag("sleep-tag");

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Slept for 10 seconds!
      </h1>
    </div>
  );
}

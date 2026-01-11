import { getPokemonsData } from "@/lib/fetchers/pokemon";
import Presentation from "./presentation";

export default async function Container() {
  const pokemonsData = await getPokemonsData();
  const { results } = pokemonsData;
  return <Presentation results={results} />;
}

"use client";
import { useEffect } from "react";
export default function Presentation({
  results,
}: {
  results: { name: string; url: string }[];
}) {
	useEffect(() => {
		const referrer = document.referrer;
		console.log("Referrer URL:", referrer);
	}, []);
  return (
    <div>
      <h1>Pokémon List</h1>
      {results.map((pokemon: { name: string; url: string }) => (
        <label key={pokemon.name}>
          <input type="checkbox" name={pokemon.name} />
          {pokemon.name}
        </label>
      ))}
    </div>
  );
}

export default function Presentation({
  results,
}: {
  results: { name: string; url: string }[];
}) {
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

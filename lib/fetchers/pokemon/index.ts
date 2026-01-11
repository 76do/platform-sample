export async function getPokemonsData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
    method: "GET",
    cache: "force-cache",
    next: {
      tags: ["pokemons"],
    },
  });

  if (!response.ok) {
    throw new Error(
      `ポケモンの取得に失敗しました。ステータスコード: ${response.status}`,
    );
  }

  return response.json();
}

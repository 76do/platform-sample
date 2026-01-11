import SearchContainer from "../../_shared/_containers/search/container";
import Link from "next/link";
type Props = {
  params: Promise<{ regionId: string }>;
};

export default async function RegionPage({ params }: Props) {
  const { regionId } = await params;

  return (
    <div>
      <SearchContainer />
      <h1>Region: {regionId}</h1>
      <p>Page: 1</p>

      <Link href={`/region/${regionId}`}>Go to region main page</Link>
      <Link href={`/region/${regionId}/page/2`}>Go to paginated page 2</Link>
      <Link href={`/region/${regionId}/page/3`}>Go to paginated page 3</Link>
      <Link href={`/region/${regionId}/page/4`}>Go to paginated page 4</Link>
      <Link href={`/region/${regionId}/page/5`}>Go to paginated page 5</Link>
    </div>
  );
}

export async function generateStaticParams() {
  const regions = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];

  return regions.map((region) => ({
    regionId: region.id,
  }));
}

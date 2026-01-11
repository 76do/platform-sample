import Link from "next/link";
type Props = {
  params: Promise<{ regionId: string; page: string }>;
};

export default async function RegionPaginatedPage({ params }: Props) {
  const { regionId, page } = await params;

  return (
    <div>
      <h1>Region: {regionId}</h1>
      <p>Page: {page}</p>

      <Link href={`/region/${regionId}`}>Go to region main page</Link>
      <Link href={`/region/${regionId}/page/2`}>Go to paginated page 2</Link>
      <Link href={`/region/${regionId}/page/3`}>Go to paginated page 3</Link>
      <Link href={`/region/${regionId}/page/4`}>Go to paginated page 4</Link>
      <Link href={`/region/${regionId}/page/5`}>Go to paginated page 5</Link>
    </div>
  );
}

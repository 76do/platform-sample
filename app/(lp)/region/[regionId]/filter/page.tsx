type Props = {
  params: Promise<{ regionId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>Region: {regionId} / Filter</h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

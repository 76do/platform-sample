type Props = {
  params: Promise<{ regionId: string; personCountId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPersonCountFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, personCountId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

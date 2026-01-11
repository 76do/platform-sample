type Props = {
  params: Promise<{ regionId: string; prefId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPrefFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, prefId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Pref: {prefId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

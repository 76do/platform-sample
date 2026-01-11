type Props = {
  params: Promise<{ regionId: string; purposeId: string; cityId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPurposeCityFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, purposeId, cityId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / City: {cityId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

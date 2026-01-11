type Props = {
  params: Promise<{ regionId: string; cityId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionCityFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, cityId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / City: {cityId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

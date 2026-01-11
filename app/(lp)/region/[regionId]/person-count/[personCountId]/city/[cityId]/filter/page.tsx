type Props = {
  params: Promise<{ regionId: string; personCountId: string; cityId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPersonCountCityFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, personCountId, cityId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / City: {cityId} /
        Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

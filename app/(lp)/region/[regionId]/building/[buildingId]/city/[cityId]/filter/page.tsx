type Props = {
  params: Promise<{ regionId: string; buildingId: string; cityId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionBuildingCityFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, buildingId, cityId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / City: {cityId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

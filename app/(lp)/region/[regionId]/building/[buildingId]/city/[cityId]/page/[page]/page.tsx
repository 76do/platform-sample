type Props = {
  params: Promise<{
    regionId: string;
    buildingId: string;
    cityId: string;
    page: string;
  }>;
};

export default async function RegionBuildingCityPaginatedPage({
  params,
}: Props) {
  const { regionId, buildingId, cityId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / City: {cityId} / Page:{" "}
        {page}
      </h1>
    </div>
  );
}

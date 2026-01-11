type Props = {
  params: Promise<{
    regionId: string;
    purposeId: string;
    cityId: string;
    page: string;
  }>;
};

export default async function RegionPurposeCityPaginatedPage({
  params,
}: Props) {
  const { regionId, purposeId, cityId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / City: {cityId} / Page:{" "}
        {page}
      </h1>
    </div>
  );
}

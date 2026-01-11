type Props = {
  params: Promise<{
    regionId: string;
    personCountId: string;
    cityId: string;
    page: string;
  }>;
};

export default async function RegionPersonCountCityPaginatedPage({
  params,
}: Props) {
  const { regionId, personCountId, cityId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / City: {cityId} /
        Page: {page}
      </h1>
    </div>
  );
}

type Props = {
  params: Promise<{ regionId: string; cityId: string; page: string }>;
};

export default async function RegionCityPaginatedPage({ params }: Props) {
  const { regionId, cityId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / City: {cityId} / Page: {page}
      </h1>
    </div>
  );
}

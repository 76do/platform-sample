type Props = {
  params: Promise<{ regionId: string; buildingId: string; page: string }>;
};

export default async function RegionBuildingPaginatedPage({ params }: Props) {
  const { regionId, buildingId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / Page: {page}
      </h1>
    </div>
  );
}

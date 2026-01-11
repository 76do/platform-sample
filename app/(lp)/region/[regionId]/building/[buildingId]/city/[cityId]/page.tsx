type Props = {
  params: Promise<{ regionId: string; buildingId: string; cityId: string }>;
};

export default async function RegionBuildingCityPage({ params }: Props) {
  const { regionId, buildingId, cityId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / City: {cityId}
      </h1>
    </div>
  );
}

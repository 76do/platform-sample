type Props = {
  params: Promise<{ regionId: string; buildingId: string }>;
};

export default async function RegionBuildingPage({ params }: Props) {
  const { regionId, buildingId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId}
      </h1>
    </div>
  );
}

type Props = {
  params: Promise<{
    regionId: string;
    buildingId: string;
    prefectureId: string;
  }>;
};

export default async function RegionBuildingPrefecturePage({ params }: Props) {
  const { regionId, buildingId, prefectureId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / Prefecture: {prefectureId}
      </h1>
    </div>
  );
}

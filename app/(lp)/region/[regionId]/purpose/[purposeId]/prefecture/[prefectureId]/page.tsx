type Props = {
  params: Promise<{
    regionId: string;
    purposeId: string;
    prefectureId: string;
  }>;
};

export default async function RegionPurposePrefecturePage({ params }: Props) {
  const { regionId, purposeId, prefectureId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / Prefecture: {prefectureId}
      </h1>
    </div>
  );
}

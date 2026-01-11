type Props = {
  params: Promise<{
    regionId: string;
    personCountId: string;
    prefectureId: string;
  }>;
};

export default async function RegionPersonCountPrefecturePage({
  params,
}: Props) {
  const { regionId, personCountId, prefectureId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / Prefecture:{" "}
        {prefectureId}
      </h1>
    </div>
  );
}

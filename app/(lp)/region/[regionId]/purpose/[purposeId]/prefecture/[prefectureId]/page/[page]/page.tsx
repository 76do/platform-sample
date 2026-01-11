type Props = {
  params: Promise<{
    regionId: string;
    purposeId: string;
    prefectureId: string;
    page: string;
  }>;
};

export default async function RegionPurposePrefecturePaginatedPage({
  params,
}: Props) {
  const { regionId, purposeId, prefectureId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / Prefecture: {prefectureId} /
        Page: {page}
      </h1>
    </div>
  );
}

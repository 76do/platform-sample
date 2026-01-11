type Props = {
  params: Promise<{
    regionId: string;
    personCountId: string;
    prefectureId: string;
    page: string;
  }>;
};

export default async function RegionPersonCountPrefecturePaginatedPage({
  params,
}: Props) {
  const { regionId, personCountId, prefectureId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / Prefecture:{" "}
        {prefectureId} / Page: {page}
      </h1>
    </div>
  );
}

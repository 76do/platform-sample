type Props = {
  params: Promise<{
    regionId: string;
    buildingId: string;
    prefectureId: string;
    page: string;
  }>;
};

export default async function RegionBuildingPrefecturePaginatedPage({
  params,
}: Props) {
  const { regionId, buildingId, prefectureId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / Prefecture: {prefectureId}{" "}
        / Page: {page}
      </h1>
    </div>
  );
}

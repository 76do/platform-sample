type Props = {
  params: Promise<{
    regionId: string;
    buildingId: string;
    prefectureId: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionBuildingPrefectureFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, buildingId, prefectureId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / Prefecture: {prefectureId}{" "}
        / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

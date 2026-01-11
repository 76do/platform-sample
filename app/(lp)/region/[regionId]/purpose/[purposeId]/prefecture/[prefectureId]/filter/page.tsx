type Props = {
  params: Promise<{
    regionId: string;
    purposeId: string;
    prefectureId: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPurposePrefectureFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, purposeId, prefectureId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / Prefecture: {prefectureId} /
        Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

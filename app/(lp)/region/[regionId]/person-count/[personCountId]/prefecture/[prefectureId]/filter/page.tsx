type Props = {
  params: Promise<{
    regionId: string;
    personCountId: string;
    prefectureId: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPersonCountPrefectureFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, personCountId, prefectureId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / Prefecture:{" "}
        {prefectureId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

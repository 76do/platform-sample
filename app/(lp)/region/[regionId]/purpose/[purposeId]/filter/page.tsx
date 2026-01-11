type Props = {
  params: Promise<{ regionId: string; purposeId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionPurposeFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, purposeId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

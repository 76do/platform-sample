type Props = {
  params: Promise<{ regionId: string; buildingId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionBuildingFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, buildingId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Building: {buildingId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

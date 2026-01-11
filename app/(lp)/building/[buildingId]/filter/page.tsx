type Props = {
  params: Promise<{ buildingId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BuildingFilterPage({
  params,
  searchParams,
}: Props) {
  const { buildingId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>Building: {buildingId} / Filter</h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

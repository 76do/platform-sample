type Props = {
  params: Promise<{ buildingId: string; page: string }>;
};

export default async function BuildingPaginatedPage({ params }: Props) {
  const { buildingId, page } = await params;

  return (
    <div>
      <h1>
        Building: {buildingId} / Page: {page}
      </h1>
    </div>
  );
}

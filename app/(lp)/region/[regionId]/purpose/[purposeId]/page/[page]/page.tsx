type Props = {
  params: Promise<{ regionId: string; purposeId: string; page: string }>;
};

export default async function RegionPurposePaginatedPage({ params }: Props) {
  const { regionId, purposeId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / Page: {page}
      </h1>
    </div>
  );
}

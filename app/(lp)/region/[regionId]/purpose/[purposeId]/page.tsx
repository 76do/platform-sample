type Props = {
  params: Promise<{ regionId: string; purposeId: string }>;
};

export default async function RegionPurposePage({ params }: Props) {
  const { regionId, purposeId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId}
      </h1>
    </div>
  );
}

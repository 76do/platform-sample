type Props = {
  params: Promise<{ regionId: string; purposeId: string; cityId: string }>;
};

export default async function RegionPurposeCityPage({ params }: Props) {
  const { regionId, purposeId, cityId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Purpose: {purposeId} / City: {cityId}
      </h1>
    </div>
  );
}

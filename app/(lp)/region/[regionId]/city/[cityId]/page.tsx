type Props = {
  params: Promise<{ regionId: string; cityId: string }>;
};

export default async function RegionCityPage({ params }: Props) {
  const { regionId, cityId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / City: {cityId}
      </h1>
    </div>
  );
}

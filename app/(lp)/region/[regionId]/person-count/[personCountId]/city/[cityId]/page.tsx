type Props = {
  params: Promise<{ regionId: string; personCountId: string; cityId: string }>;
};

export default async function RegionPersonCountCityPage({ params }: Props) {
  const { regionId, personCountId, cityId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / City: {cityId}
      </h1>
    </div>
  );
}

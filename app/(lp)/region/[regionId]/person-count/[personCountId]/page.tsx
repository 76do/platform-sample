type Props = {
  params: Promise<{ regionId: string; personCountId: string }>;
};

export default async function RegionPersonCountPage({ params }: Props) {
  const { regionId, personCountId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId}
      </h1>
    </div>
  );
}

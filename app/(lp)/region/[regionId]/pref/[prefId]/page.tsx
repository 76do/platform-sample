type Props = {
  params: Promise<{ regionId: string; prefId: string }>;
};

export default async function RegionPrefPage({ params }: Props) {
  const { regionId, prefId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Pref: {prefId}
      </h1>
    </div>
  );
}

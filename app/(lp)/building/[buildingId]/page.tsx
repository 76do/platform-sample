type Props = {
  params: Promise<{ buildingId: string }>;
};

export default async function BuildingPage({ params }: Props) {
  const { buildingId } = await params;

  return (
    <div>
      <h1>Building: {buildingId}</h1>
    </div>
  );
}

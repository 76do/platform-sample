type Props = {
  params: Promise<{ purposeId: string }>;
};

export default async function PurposePage({ params }: Props) {
  const { purposeId } = await params;

  return (
    <div>
      <h1>Purpose: {purposeId}</h1>
    </div>
  );
}

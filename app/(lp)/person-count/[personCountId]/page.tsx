type Props = {
  params: Promise<{ personCountId: string }>;
};

export default async function PersonCountPage({ params }: Props) {
  const { personCountId } = await params;

  return (
    <div>
      <h1>Person Count: {personCountId}</h1>
    </div>
  );
}

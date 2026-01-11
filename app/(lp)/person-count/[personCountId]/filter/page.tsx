type Props = {
  params: Promise<{ personCountId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PersonCountFilterPage({
  params,
  searchParams,
}: Props) {
  const { personCountId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>Person Count: {personCountId} / Filter</h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

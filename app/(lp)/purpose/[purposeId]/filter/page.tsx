type Props = {
  params: Promise<{ purposeId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PurposeFilterPage({
  params,
  searchParams,
}: Props) {
  const { purposeId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>Purpose: {purposeId} / Filter</h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

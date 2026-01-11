type Props = {
  params: Promise<{ regionId: string; budgetId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionBudgetFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, budgetId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

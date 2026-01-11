type Props = {
  params: Promise<{ budgetId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BudgetFilterPage({
  params,
  searchParams,
}: Props) {
  const { budgetId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>Budget: {budgetId} / Filter</h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

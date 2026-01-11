type Props = {
  params: Promise<{ regionId: string; budgetId: string; page: string }>;
};

export default async function RegionBudgetPaginatedPage({ params }: Props) {
  const { regionId, budgetId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / Page: {page}
      </h1>
    </div>
  );
}

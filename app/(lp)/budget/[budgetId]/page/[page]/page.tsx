type Props = {
  params: Promise<{ budgetId: string; page: string }>;
};

export default async function BudgetPaginatedPage({ params }: Props) {
  const { budgetId, page } = await params;

  return (
    <div>
      <h1>
        Budget: {budgetId} / Page: {page}
      </h1>
    </div>
  );
}

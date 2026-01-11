type Props = {
  params: Promise<{ regionId: string; budgetId: string }>;
};

export default async function RegionBudgetPage({ params }: Props) {
  const { regionId, budgetId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId}
      </h1>
    </div>
  );
}

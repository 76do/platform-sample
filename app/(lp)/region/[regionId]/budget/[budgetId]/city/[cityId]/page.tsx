type Props = {
  params: Promise<{ regionId: string; budgetId: string; cityId: string }>;
};

export default async function RegionBudgetCityPage({ params }: Props) {
  const { regionId, budgetId, cityId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / City: {cityId}
      </h1>
    </div>
  );
}

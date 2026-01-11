type Props = {
  params: Promise<{
    regionId: string;
    budgetId: string;
    cityId: string;
    page: string;
  }>;
};

export default async function RegionBudgetCityPaginatedPage({ params }: Props) {
  const { regionId, budgetId, cityId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / City: {cityId} / Page: {page}
      </h1>
    </div>
  );
}

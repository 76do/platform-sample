type Props = {
  params: Promise<{ regionId: string; budgetId: string; cityId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionBudgetCityFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, budgetId, cityId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / City: {cityId} / Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

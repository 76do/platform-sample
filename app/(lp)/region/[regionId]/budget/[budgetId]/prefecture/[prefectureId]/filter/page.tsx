type Props = {
  params: Promise<{ regionId: string; budgetId: string; prefectureId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RegionBudgetPrefectureFilterPage({
  params,
  searchParams,
}: Props) {
  const { regionId, budgetId, prefectureId } = await params;
  const filters = await searchParams;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / Prefecture: {prefectureId} /
        Filter
      </h1>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

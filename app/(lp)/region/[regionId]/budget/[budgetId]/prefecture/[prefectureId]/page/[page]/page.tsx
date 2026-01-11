type Props = {
  params: Promise<{
    regionId: string;
    budgetId: string;
    prefectureId: string;
    page: string;
  }>;
};

export default async function RegionBudgetPrefecturePaginatedPage({
  params,
}: Props) {
  const { regionId, budgetId, prefectureId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / Prefecture: {prefectureId} /
        Page: {page}
      </h1>
    </div>
  );
}

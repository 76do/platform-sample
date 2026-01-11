type Props = {
  params: Promise<{ regionId: string; budgetId: string; prefectureId: string }>;
};

export default async function RegionBudgetPrefecturePage({ params }: Props) {
  const { regionId, budgetId, prefectureId } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Budget: {budgetId} / Prefecture: {prefectureId}
      </h1>
    </div>
  );
}

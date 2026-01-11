type Props = {
  params: Promise<{ budgetId: string }>;
};

export default async function BudgetPage({ params }: Props) {
  const { budgetId } = await params;

  return (
    <div>
      <h1>Budget: {budgetId}</h1>
    </div>
  );
}

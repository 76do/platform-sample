type Props = {
  params: Promise<{ purposeId: string; page: string }>;
};

export default async function PurposePaginatedPage({ params }: Props) {
  const { purposeId, page } = await params;

  return (
    <div>
      <h1>
        Purpose: {purposeId} / Page: {page}
      </h1>
    </div>
  );
}

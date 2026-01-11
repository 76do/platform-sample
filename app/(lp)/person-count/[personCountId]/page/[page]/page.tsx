type Props = {
  params: Promise<{ personCountId: string; page: string }>;
};

export default async function PersonCountPaginatedPage({ params }: Props) {
  const { personCountId, page } = await params;

  return (
    <div>
      <h1>
        Person Count: {personCountId} / Page: {page}
      </h1>
    </div>
  );
}

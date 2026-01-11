type Props = {
  params: Promise<{ regionId: string; personCountId: string; page: string }>;
};

export default async function RegionPersonCountPaginatedPage({
  params,
}: Props) {
  const { regionId, personCountId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Person Count: {personCountId} / Page: {page}
      </h1>
    </div>
  );
}

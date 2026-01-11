type Props = {
  params: Promise<{ regionId: string; prefId: string; page: string }>;
};

export default async function RegionPrefPaginatedPage({ params }: Props) {
  const { regionId, prefId, page } = await params;

  return (
    <div>
      <h1>
        Region: {regionId} / Pref: {prefId} / Page: {page}
      </h1>
    </div>
  );
}

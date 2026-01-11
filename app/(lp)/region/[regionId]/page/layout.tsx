import SearchContainer from "../../../_shared/_containers/search/container";

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ regionId: string }>;
  children: React.ReactNode;
}) {
  const { regionId } = await params;
  console.log("Region Layout:", regionId);

  return (
    <>
      <SearchContainer />
      {children}
    </>
  );
}

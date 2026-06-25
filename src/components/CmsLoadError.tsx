export default function CmsLoadError({ error }: { error: unknown }) {
  return (
    <main className="cms-load-error">
      <h1>CMS content could not be loaded</h1>
      <p>{error instanceof Error ? error.message : "Check the Sanity connection and required singleton documents"}</p>
    </main>
  );
}

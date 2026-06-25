export default function ErrorPage({ statusCode = 404 }) {
  return (
    <main className="min-h-screen px-6 py-24 text-center text-nc-blue">
      <h1 className="text-5xl font-bold">{statusCode}</h1>
      <p className="mt-4 text-lg">This page could not be found.</p>
    </main>
  );
}

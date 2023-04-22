export default async function fetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = await res.json();

  return data;
}

import useSWR from 'swr';

export async function getAllPortfolios() {
  const { data, error } = useSWR(`/api/portfolio`);

  return data;
}

import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import PortfolioListItem from './PortfolioListItem';
import { Grid } from './styled-components/Grid';

export default function PortfolioList() {
  const { data, error } = useSWR(`/api/portfolio/`, fetcher);
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(250px, 1fr))'>
      {data?.map((item) => {
        return <PortfolioListItem data={item} />;
      })}
    </Grid>
  );
}

import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';

import PortfolioListItem from './PortfolioListItem';
import { Container } from './styled-components/Container';
export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;
`;

export default function PortfolioList() {
  const { data, error } = useSWR(`/api/portfolio/`, fetcher);
  return (
    <Grid>
      {data?.map((item) => {
        return <PortfolioListItem data={item} />;
      })}
    </Grid>
  );
}

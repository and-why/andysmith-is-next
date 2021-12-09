import PortfolioListItem from './PortfolioListItem';
import { Grid } from './styled-components/Grid';
import { portfolio } from '../data';

export default function PortfolioList() {
  const data = portfolio;

  return (
    <Grid templateColumns='repeat(auto-fit, minmax(250px, 1fr))'>
      {data?.map((item, index) => {
        return <PortfolioListItem key={index} data={item} />;
      })}
    </Grid>
  );
}

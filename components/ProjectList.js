import ProjectListItem from './ProjectListItem';
import { Grid } from './styled-components/Grid';
import { projects } from '../data';

export default function ProjectList() {
  const data = projects;

  return (
    <Grid templateColumns='repeat(auto-fit, minmax(250px, 1fr))'>
      {data?.map((item, index) => {
        return <ProjectListItem key={index} data={item} />;
      })}
    </Grid>
  );
}

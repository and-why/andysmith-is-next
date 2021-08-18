import { portfolio } from '../../../data';

export default function personHandler({ query: { name } }, res) {
  const filtered = portfolio.filter((p) => p.name === name);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `The portfolio with  name: ${name} not found.` });
  }
}

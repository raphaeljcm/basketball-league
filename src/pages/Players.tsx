import { useSearchParams } from 'react-router-dom';
import { Container } from 'src/styles';

export default function Players() {
  const [searchParams] = useSearchParams();
  const team = searchParams.get('teamId');

  return <Container>Players for team {team}</Container>;
}

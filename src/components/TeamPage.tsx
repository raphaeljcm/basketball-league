import { useParams } from 'react-router-dom';
import * as ES from 'src/styles';

export function TeamPage() {
  const { teamId } = useParams();

  return <ES.Container>Team page for {teamId}</ES.Container>;
}

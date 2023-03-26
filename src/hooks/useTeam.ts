import { useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UseTeamResponse = {
  body: string;
};

type UseTeam = {
  championships: number[];
  coach: string;
  established: number;
  id: string;
  losses: number;
  manager: string;
  name: string;
  players: {
    apg: number;
    avatar: string;
    id: 'preethi-kasireddy';
    name: 'Preethi Kasireddy';
    number: number;
    position: string;
    ppg: number;
    rpg: number;
    spg: number;
    teamId: string;
  }[];
  wins: number;
};

export function useTeam(teamId?: string) {
  return useQuery<UseTeam>(
    ['teams', teamId],
    async ({ signal }) => {
      const { data } = await api.post<UseTeamResponse>(
        '/team',
        { team: teamId },
        { signal },
      );
      return JSON.parse(data.body);
    },
    { enabled: !!teamId },
  );
}

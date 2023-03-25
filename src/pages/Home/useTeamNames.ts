import { Logos } from '@/TeamLogo';
import { useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UseTeamNamesResponse = {
  body: string;
};

export function useTeamNames() {
  return useQuery<Logos[]>(['teams'], async ({ signal }) => {
    const { data } = await api.get<UseTeamNamesResponse>('/teams', {
      signal,
    });

    return JSON.parse(data.body);
  });
}

import { useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UsePlayerNamesResponse = {
  body: string;
};

export function usePlayerNames(teamId: string | null) {
  return useQuery<string[]>(
    ['teams', 'players', teamId],
    async ({ signal }) => {
      const { data } = await api.post<UsePlayerNamesResponse>(
        '/players?filter=names',
        { team: teamId },
        { signal },
      );

      return JSON.parse(data.body);
    },
  );
}

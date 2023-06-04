import { useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UsePlayerResponse = {
  body: string;
};

type Player = {
  apg: number;
  avatar: string;
  id: string;
  name: string;
  number: number;
  position: string;
  ppg: number;
  rpg: number;
  spg: number;
  teamId: string;
};

export function usePlayer(player?: string) {
  return useQuery<Player, Error>(
    ['players', player],
    async ({ signal }) => {
      const { data } = await api.get<UsePlayerResponse>(`/players/${player}`, {
        signal,
      });

      return JSON.parse(data.body);
    },
    {
      enabled: !!player,
    },
  );
}

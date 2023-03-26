import { useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UseTeamArticleResponse = {
  body: string;
};

type UseTeamArticle = {
  date: string;
  id: string;
  title: string;
}[];

export function useTeamArticles(teamId?: string) {
  return useQuery<UseTeamArticle>(
    ['teams', 'articles'],
    async ({ signal }) => {
      const { data } = await api.post<UseTeamArticleResponse>(
        '/articles',
        { team: teamId },
        { signal },
      );
      return JSON.parse(data.body);
    },
    { enabled: !!teamId },
  );
}

import { useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UseArticleResponse = {
  body: string;
};

interface UseArticleProps {
  articleId?: string;
  teamId?: string;
}

export function useArticle({ articleId, teamId }: UseArticleProps) {
  return useQuery(
    ['articles', articleId],
    async ({ signal }) => {
      const { data } = await api.post<UseArticleResponse>(
        '/article',
        {
          teamId,
          articleId,
        },
        { signal },
      );

      return JSON.parse(data.body);
    },
    {
      enabled: !!articleId && !!teamId,
    },
  );
}

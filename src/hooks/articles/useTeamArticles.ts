import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { api } from 'src/services/api';

type UseTeamArticleResponse = {
  body: string;
};

type UseTeamArticle = {
  date: string;
  id: string;
  title: string;
}[];

async function useTeamQueryFn({ signal, queryKey }: QueryFunctionContext) {
  const teamId = queryKey[2];

  const { data } = await api.post<UseTeamArticleResponse>(
    '/articles',
    { team: teamId },
    { signal },
  );
  return JSON.parse(data.body);
}

function useTeamArticles(teamId?: string) {
  return useQuery<UseTeamArticle, Error>(
    ['teams', 'articles', teamId],
    useTeamQueryFn,
    { enabled: !!teamId },
  );
}

function useTeamArticlesTitle(teamId?: string) {
  return useQuery<UseTeamArticle, Error, string[]>(
    ['teams', 'articles', teamId],
    useTeamQueryFn,
    {
      enabled: !!teamId,
      select: articles => articles.map(article => article.title),
    },
  );
}

export { useTeamArticles, useTeamArticlesTitle };

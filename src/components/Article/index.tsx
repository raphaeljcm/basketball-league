import { Loading } from '@/Loading';
import { useParams } from 'react-router-dom';
import { useArticle } from 'src/hooks/articles/useArticle';

import * as S from './styles';

export default function Article() {
  const { teamId, articleId } = useParams();
  const articleQuery = useArticle({ teamId, articleId });

  if (articleQuery.isError) return <h2>Failed loading article</h2>;

  return (
    <S.Panel>
      {articleQuery.isLoading ? (
        <Loading />
      ) : (
        <article>
          <h1>{articleQuery.data.title}</h1>
          <p>{articleQuery.data.body}</p>
        </article>
      )}
    </S.Panel>
  );
}

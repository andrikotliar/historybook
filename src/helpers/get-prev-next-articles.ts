import type { CollectionEntry } from 'astro:content';
import type { RootId } from '../common/types/root-id';
import type { PrevNextArticleData } from '../common/types/prev-next-article-data';

type Options = {
  articles: CollectionEntry<RootId>[];
  index: number;
  rootId: RootId;
};

type ArticlesData = {
  prevArticle: PrevNextArticleData | null;
  nextArticle: PrevNextArticleData | null;
};

const getPrevNextArticles = ({
  articles,
  index,
  rootId,
}: Options): ArticlesData => {
  const articlesData: ArticlesData = {
    prevArticle: null,
    nextArticle: null,
  };

  if (index > 0) {
    const prevArticle = articles[index - 1];

    articlesData.prevArticle = {
      title: prevArticle.data.title,
      description: prevArticle.data.description,
      url: `/${rootId}/${prevArticle.slug}`,
    };
  }

  if (index < articles.length - 1) {
    const nextArticle = articles[index + 1];
    articlesData.nextArticle = {
      title: nextArticle.data.title,
      description: nextArticle.data.description,
      url: `/${rootId}/${nextArticle.slug}`,
    };
  }

  return articlesData;
};

export { getPrevNextArticles };

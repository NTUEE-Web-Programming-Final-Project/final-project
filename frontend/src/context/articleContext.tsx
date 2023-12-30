import { createContext, useState, useContext } from "react";
import type { Article } from "../../../shared/shared_types";
import { useLazyQuery } from "@apollo/client";
import { ALL_ARTICLES_QUERY } from "../graphql/index.ts";
import { useCallback } from "react";

export type ArticleContextType = {
  article: Article;
  setArticle: (article: Article) => void;
  fetchArticles: () => Promise<void>;
};

export const ArticleContext = createContext<ArticleContextType>({
  article: null,
  setArticle: () => {},
  fetchArticles: async () => {},
});

type Props = {
  children: React.ReactNode;
};

export function ArticleProvider({ children }: Props) {
  const [article, setArticle] = useState<Article>([]);
  const [getAllArticle, { loading, error }] = useLazyQuery(ALL_ARTICLES_QUERY);
  const fetchArticles = useCallback(async () => {
    try {
      if (loading) return console.log("Loading...");
      if (error) return alert(`Error! ${error.message}`);
      setArticle((await getAllArticle()).data?.AllArticles);
    } catch (err) {
      console.log(err);
      alert("Error: failed to fetch articles");
    }
  }, [article, setArticle]);

  return (
    <ArticleContext.Provider value={{ article, setArticle, fetchArticles }}>
      {children}
    </ArticleContext.Provider>
  );
}

export default function useArticles() {
  return useContext(ArticleContext);
}

import { useState } from "react";

export default function useZap() {
  const [loading, setLoading] = useState(false);

  const zapArticle = async ({
    articleId,
    username,
  }: {
    articleId: number;
    username: string;
  }) => {
    if (loading) return;
    setLoading(true);

    const res = await fetch("/api/likes", {
      method: "POST",
      body: JSON.stringify({
        articleId,
        username,
      }),
    });

    if (!res.ok) {
      const body = await res.json();
      throw new Error(body.error);
    }

    window.location.reload();
    setLoading(false);
  };

  const unzapArticle = async ({
    articleId,
    username,
  }: {
    articleId: number;
    username: string;
  }) => {
    if (loading) return;

    setLoading(true);
    const res = await fetch("/api/likes", {
      method: "DELETE",
      body: JSON.stringify({
        articleId,
        username
      }),
    });

    if (!res.ok) {
      const body = await res.json();
      throw new Error(body.error);
    }

    window.location.reload();
    setLoading(false);
  };

  return {
    zapArticle,
    unzapArticle,
    loading,
  };
}

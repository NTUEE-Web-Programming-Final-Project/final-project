import { useState } from "react";
import type { EventHandler, MouseEvent } from "react";
import { Zap } from "lucide-react";
import { cn } from "../../lib/utils.ts";
import {
  ALL_ARTICLES_QUERY,
  LIKE_ARTICLE_MUTATION,
  UNLIKE_ARTICLE_MUTATION,
} from "../../graphql";
import { useQuery, useMutation } from "@apollo/client";

type LikeButtonProps = {
  initialLiked?: boolean;
  likerId: number;
  articleId: number;
};

const LikeButton = ({ initialLiked, likerId, articleId }: LikeButtonProps) => {
  const [likeArticle, { loading: likeLoading, error: likeError }] = useMutation(
    LIKE_ARTICLE_MUTATION,
  );
  const [unlikeArticle, { loading: unlikeLoading, error: unlikeError }] =
    useMutation(UNLIKE_ARTICLE_MUTATION);

  const {
    data: articleData,
    loading: articleLoading,
    error: articleError,
  } = useQuery(ALL_ARTICLES_QUERY);
  const article = articleData?.AllArticles?.filter((a) => {
    return a?.id === articleId;
  })[0];
  if (!article) throw new Error("article not found!");
  if (articleLoading) return "Submitting...";
  if (articleError) return `Submission error! ${articleError.message}`;

  const [liked, setLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(article.likesId.length);

  const handleClick: EventHandler<MouseEvent> = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!likerId) throw new Error("liker's id is undefined");

    if (liked) {
      if (unlikeLoading) return "Submitting...";
      if (unlikeError) return `Submission error! ${unlikeError.message}`;
      await unlikeArticle({
        variables: {
          articleUnlikeInput: {
            likerId: likerId,
            articleId: articleId,
          },
        },
      });
      setLikesCount((c) => c - 1);
      setLiked(false);
    } else {
      if (likeLoading) return "Submitting...";
      if (likeError) return `Submission error! ${likeError.message}`;
      await likeArticle({
        variables: {
          articleLikeInput: {
            likerId: likerId,
            articleId: articleId,
          },
        },
      });
      setLikesCount((c) => c + 1);
      setLiked(true);
    }
  };

  return (
    <button
      className={cn(
        "flex w-16 items-center gap-1 hover:text-brand mb-3",
        liked && "text-brand",
      )}
      style={{
        marginLeft: "15%",
      }}
      onClick={handleClick}
    >
      <div
        className={cn(
          "flex items-center gap-1 rounded-full p-1.5 transition-colors duration-300 hover:bg-brand/10",
          liked && "bg-brand/10",
        )}
      >
        <Zap size={40} />
      </div>
      {likesCount > 0 && likesCount}
    </button>
  );
};

export default LikeButton;

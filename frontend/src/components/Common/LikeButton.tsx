import { useState } from "react";
import type { EventHandler, MouseEvent } from "react";

import { Heart } from "lucide-react";

import useZap from "../../hooks/useLike.ts";
import { cn } from "../../lib/utils.ts";

type ZapButtonProps = {
  initialZaps: number;
  initialZapped?: boolean;
  articleId: number;
  username?: string;
};

export default function ZapButton({
  initialZaps,
  initialZapped,
  articleId,
  username,
}: ZapButtonProps) {
  const [zapped, setZapped] = useState(initialZapped);
  const [zapsCount, setZapsCount] = useState(initialZaps);
  const { zapArticle, unzapArticle, loading } = useZap();

  const handleClick: EventHandler<MouseEvent> = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!username) return;
    if (zapped) {
      await unzapArticle({
        articleId,
        username,
      });
      setZapsCount((c) => c - 1);
      setZapped(false);
    } else {
      await zapArticle({
        articleId,
        username,
      });
      setZapsCount((c) => c + 1);
      setZapped(true);
    }
  };

  return (
    <button
      className={cn(
        "flex w-16 items-center gap-1 hover:text-brand",
        zapped && "text-brand",
      )}
      onClick={handleClick}
      disabled={loading}
    >
      <div
        className={cn(
          "flex items-center gap-1 rounded-full p-1.5 transition-colors duration-300 hover:bg-brand/10",
          zapped && "bg-brand/10",
        )}
      >
        <Heart size={18} />
      </div>
      {zapsCount > 0 && zapsCount}
    </button>
  );
}

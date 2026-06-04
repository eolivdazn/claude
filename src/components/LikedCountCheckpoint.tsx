"use client";

import { useEffect } from "react";

/** Stamps the current liked count into localStorage when the recommendations
 *  page mounts. SwipeDeck reads this to show progress since the last visit. */
export function LikedCountCheckpoint({ likedCount }: { likedCount: number }) {
  useEffect(() => {
    localStorage.setItem("likedCountBaseline", String(likedCount));
  }, [likedCount]);
  return null;
}

"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationControls,
  type PanInfo,
} from "framer-motion";
import type { MovieCard } from "@/types";
import { MovieCardContent } from "@/components/MovieCardContent";

export type SwipeDirection = "left" | "right";

const SWIPE_THRESHOLD = 110; // px of drag to commit a swipe
const FLY_DISTANCE = 1000;

export function SwipeCard({
  movie,
  isTop,
  flyOut,
  onSwipe,
}: {
  movie: MovieCard;
  isTop: boolean;
  /** When set by the parent (button press), the card flings off-screen. */
  flyOut: SwipeDirection | null;
  onSwipe: (direction: SwipeDirection) => void;
}) {
  const x = useMotionValue(0);
  const controls = useAnimationControls();

  const rotate = useTransform(x, [-FLY_DISTANCE, 0, FLY_DISTANCE], [-18, 0, 18]);
  const likeOpacity = useTransform(x, [40, 140], [0, 1]);
  const dislikeOpacity = useTransform(x, [-140, -40], [1, 0]);

  // Button-triggered swipe: animate off-screen, then notify the parent.
  useEffect(() => {
    if (!flyOut) return;
    const dir = flyOut === "right" ? 1 : -1;
    controls
      .start({
        x: dir * FLY_DISTANCE,
        rotate: dir * 18,
        opacity: 0,
        transition: { duration: 0.35, ease: "easeOut" },
      })
      .then(() => onSwipe(flyOut));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyOut]);

  function handleDragEnd(_e: unknown, info: PanInfo) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset > SWIPE_THRESHOLD || velocity > 600) {
      controls
        .start({
          x: FLY_DISTANCE,
          rotate: 18,
          opacity: 0,
          transition: { duration: 0.3 },
        })
        .then(() => onSwipe("right"));
    } else if (offset < -SWIPE_THRESHOLD || velocity < -600) {
      controls
        .start({
          x: -FLY_DISTANCE,
          rotate: -18,
          opacity: 0,
          transition: { duration: 0.3 },
        })
        .then(() => onSwipe("left"));
    } else {
      controls.start({ x: 0, rotate: 0, transition: { duration: 0.25 } });
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, rotate }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={isTop ? { scale: 1 } : { scale: 0.95, y: 16 }}
      whileTap={{ cursor: "grabbing" }}
    >
      {/* LIKE / NOPE overlays */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="pointer-events-none absolute left-5 top-6 z-10 rotate-[-12deg] rounded-lg border-4 border-[var(--color-like)] px-3 py-1 text-2xl font-black tracking-wider text-[var(--color-like)]"
      >
        LIKE
      </motion.div>
      <motion.div
        style={{ opacity: dislikeOpacity }}
        className="pointer-events-none absolute right-5 top-6 z-10 rotate-[12deg] rounded-lg border-4 border-[var(--color-dislike)] px-3 py-1 text-2xl font-black tracking-wider text-[var(--color-dislike)]"
      >
        NOPE
      </motion.div>

      <MovieCardContent movie={movie} />
    </motion.div>
  );
}

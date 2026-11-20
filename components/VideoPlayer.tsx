"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type VideoPlayerProps = {
  youtubeId: string;
  title: string;
  poster: string;
  className?: string;
};

/** Shows a poster; loads the YouTube player only after Play is clicked. */
export function VideoPlayer({ youtubeId, title, poster, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-black", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={poster}
            alt={`${title} video`}
            fill
            sizes="(min-width: 992px) 640px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Image src="/assets/play-button.svg" alt="" width={64} height={64} />
          </button>
        </>
      )}
    </div>
  );
}

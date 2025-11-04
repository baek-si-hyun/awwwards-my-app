import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ImageSkeleton from "./ImageSkeleton";

const Img = styled.img<{ w: number; h: number }>`
  display: block;
  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;
  object-fit: contain;
  @media (max-width: 768px) {
    width: ${(p) => Math.round(p.w * 0.85)}px;
    height: ${(p) => Math.round(p.h * 0.85)}px;
  }
  @media (max-width: 480px) {
    width: ${(p) => Math.round(p.w * 0.75)}px;
    height: ${(p) => Math.round(p.h * 0.75)}px;
  }
`;

function ImageWithSkeleton({
  sources,
  alt,
  w = 20,
  h = 20,
  round = false,
}: {
  sources: string[];
  alt: string;
  w?: number;
  h?: number;
  round?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const src = useMemo(() => sources[idx] || "", [sources, idx]);

  useEffect(() => {
    setLoaded(false);
    setIdx(0);
  }, [sources.join("|")]);

  if (!src) return <ImageSkeleton w={w} h={h} round={round} />;

  return (
    <>
      {!loaded && <ImageSkeleton w={w} h={h} round={round} />}
      <Img
        w={w}
        h={h}
        src={src}
        alt={alt}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (idx < sources.length - 1) setIdx((i) => i + 1);
          else setLoaded(false);
        }}
      />
    </>
  );
}

export default ImageWithSkeleton;


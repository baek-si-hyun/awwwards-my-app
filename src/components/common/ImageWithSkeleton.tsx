import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";

const ImgContainer = styled.div<{
  w?: number | string;
  h?: number | string;
  aspectRatio?: string;
  round?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
}>`
  position: relative;
  ${(p) =>
    p.aspectRatio
      ? css`
          aspect-ratio: ${p.aspectRatio};
        `
      : css`
          ${p.w && `width: ${typeof p.w === "number" ? `${p.w}px` : p.w}`};
          ${p.h && `height: ${typeof p.h === "number" ? `${p.h}px` : p.h}`};
        `}
  ${(p) => p.fullWidth && "width: 100%;"}
  ${(p) => p.fullHeight && "height: 100%;"}
  ${(p) => p.round && "border-radius: 50%;"}
`;

const Img = styled.img<{
  w?: number | string;
  h?: number | string;
  objectFit?: string;
  round?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
}>`
  display: block;
  ${(p) => p.objectFit && `object-fit: ${p.objectFit};`}
  ${(p) => p.w && `width: ${typeof p.w === "number" ? `${p.w}px` : p.w};`}
  ${(p) => p.h && `height: ${typeof p.h === "number" ? `${p.h}px` : p.h};`}
  ${(p) => p.fullWidth && "width: 100%;"}
  ${(p) => p.fullHeight && "height: 100%;"}
  ${(p) => p.round && "border-radius: 50%;"}
`;

interface ImageWithSkeletonProps {
  sources: string[];
  alt: string;
  w?: number | string;
  h?: number | string;
  aspectRatio?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  round?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  onClick?: () => void;
}

function ImageWithSkeleton({
  sources,
  alt,
  w,
  h,
  aspectRatio,
  objectFit = "cover",
  round = false,
  fullWidth = false,
  fullHeight = false,
  className,
  onClick,
}: ImageWithSkeletonProps) {
  const [idx, setIdx] = useState(0);
  const src = useMemo(() => sources[idx] || "", [sources, idx]);

  if (!src) {
    return null;
  }

  return (
    <ImgContainer
      w={w}
      h={h}
      aspectRatio={aspectRatio}
      round={round}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      className={className}
      onClick={onClick}
    >
      <Img
        w={w}
        h={h}
        objectFit={objectFit}
        round={round}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => {
          if (idx < sources.length - 1) setIdx((i) => i + 1);
        }}
      />
    </ImgContainer>
  );
}

export default ImageWithSkeleton;

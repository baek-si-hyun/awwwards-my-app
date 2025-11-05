import React, { useEffect, useMemo, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const filteredContainerProps = [
  "w",
  "h",
  "aspectRatio",
  "round",
  "fullWidth",
  "fullHeight",
  "isLoaded",
  "placeholderAspectRatio",
] as const;

const ImgContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !filteredContainerProps.includes(prop as (typeof filteredContainerProps)[number]),
})<{
  w?: number | string;
  h?: number | string;
  aspectRatio?: string;
  round?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  isLoaded: boolean;
  placeholderAspectRatio?: string;
}>`
  position: relative;
  ${(p) => {
    const ratio = p.aspectRatio || (!p.isLoaded ? p.placeholderAspectRatio : undefined);
    if (ratio) {
      return css`
        aspect-ratio: ${ratio};
      `;
    }
    return css`
      ${p.w && `width: ${typeof p.w === "number" ? `${p.w}px` : p.w}`};
      ${p.h && `height: ${typeof p.h === "number" ? `${p.h}px` : p.h}`};
    `;
  }}
  ${(p) => p.fullWidth && "width: 100%;"}
  ${(p) => p.fullHeight && "height: 100%;"}
  ${(p) => p.round && "border-radius: 50%;"}
  overflow: hidden;
`;

const Img = styled.img.withConfig({
  shouldForwardProp: (prop) =>
    !["isLoaded", "w", "h", "objectFit", "round", "fullWidth", "fullHeight"].includes(
      prop
    ),
})<{
  w?: number | string;
  h?: number | string;
  objectFit?: string;
  round?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  isLoaded: boolean;
}>`
  display: block;
  ${(p) => p.objectFit && `object-fit: ${p.objectFit};`}
  ${(p) => p.w && `width: ${typeof p.w === "number" ? `${p.w}px` : p.w};`}
  ${(p) => p.h && `height: ${typeof p.h === "number" ? `${p.h}px` : p.h};`}
  ${(p) => p.fullWidth && "width: 100%;"}
  ${(p) => p.fullHeight && "height: 100%;"}
  ${(p) => p.round && "border-radius: 50%;"}
  opacity: ${(p) => (p.isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Skeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(220, 220, 220, 0.75) 25%,
    rgba(235, 235, 235, 0.95) 50%,
    rgba(220, 220, 220, 0.75) 75%
  );
  transform: translateX(-100%);
  animation: ${shimmer} 1.1s infinite;
`;

interface ImageWithSkeletonProps {
  sources: string | string[];
  alt: string;
  w?: number | string;
  h?: number | string;
  aspectRatio?: string;
  placeholderAspectRatio?: string;
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
  placeholderAspectRatio,
  objectFit = "cover",
  round = false,
  fullWidth = false,
  fullHeight = false,
  className,
  onClick,
}: ImageWithSkeletonProps) {
  const [idx, setIdx] = useState(0);
  const sourceList = useMemo(
    () => (Array.isArray(sources) ? sources : [sources]),
    [sources]
  );
  const src = useMemo(() => sourceList[idx] || "", [sourceList, idx]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

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
      isLoaded={loaded}
      placeholderAspectRatio={placeholderAspectRatio}
    >
      {!loaded && <Skeleton aria-hidden />}
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
        isLoaded={loaded}
        onError={() => {
          if (idx < sourceList.length - 1) {
            setIdx((i) => i + 1);
          } else {
            setLoaded(true);
          }
        }}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </ImgContainer>
  );
}

export default ImageWithSkeleton;

import React from "react";
import styled, { keyframes, css } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Box = styled.div<{
  w: number;
  h: number;
  round?: boolean;
}>`
  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;
  border-radius: ${(p) => (p.round ? Math.max(p.w, p.h) / 2 : 6)}px;
  background: linear-gradient(90deg, #ececec 25%, #f5f5f5 37%, #ececec 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  ${(p) => css`
    @media (max-width: 768px) {
      width: ${Math.round(p.w * 0.85)}px;
      height: ${Math.round(p.h * 0.85)}px;
      border-radius: ${p.round ? Math.max(p.w * 0.85, p.h * 0.85) / 2 : 6}px;
    }
    @media (max-width: 480px) {
      width: ${Math.round(p.w * 0.75)}px;
      height: ${Math.round(p.h * 0.75)}px;
      border-radius: ${p.round ? Math.max(p.w * 0.75, p.h * 0.75) / 2 : 6}px;
    }
  `}
`;

function ImageSkeleton({ w = 20, h = 20, round = true }: { w?: number; h?: number; round?: boolean }) {
  return <Box w={w} h={h} round={round} />;
}

export default ImageSkeleton;


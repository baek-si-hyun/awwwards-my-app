import React from "react";
import SkeletonUI from "./SkeletonUI";

function TableSkeleton({ rows = 10 }: { rows?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonUI key={i} />
      ))}
    </>
  );
}

export default TableSkeleton;


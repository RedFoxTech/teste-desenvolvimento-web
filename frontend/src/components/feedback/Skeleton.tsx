import { Fragment } from "react";

interface SkeletonProps {
  quantity: number;
  h?: string;
  w?: string;
  radius?: string;
}

export const Skeleton = ({
  quantity,
  h = "144px",
  w = "100%",
  radius = "1.5rem",
}: SkeletonProps) => {
  const skeletonArray = Array.from({
    length: quantity,
  });

  return (
    <Fragment>
      {skeletonArray.map((_, index) => (
        <div
          key={index}
          role="status"
          className="animate-pulse bg-gray-200"
          style={{ height: h, width: w, borderRadius: radius }}
        />
      ))}
    </Fragment>
  );
};

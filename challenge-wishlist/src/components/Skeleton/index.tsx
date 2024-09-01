import { PropsWithChildren } from "react";

type SkeletonProps = {
  isChildrenReady: boolean;
  fallback: React.ReactNode
};

const Skeleton = ({
  children,
  isChildrenReady,
  fallback,
}: PropsWithChildren<SkeletonProps>) => {
  if (isChildrenReady) return <>{children}</>;

  return <>{fallback}</>;
};

export default Skeleton;

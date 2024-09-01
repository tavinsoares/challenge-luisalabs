import { PropsWithChildren } from "react";
import classnames from "classnames";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const gridClasses = classnames(
    "lg:tw-justify-center tw-mt-4 tw-grid tw-gap-4 lg:tw-gap-4 tw-overflow-auto lg:tw-grid-cols-4 lg:tw-grid-flow-row md:tw-grid-cols-3 md:tw-grid-flow-row tw-grid-cols-1 tw-grid-flow-row"
  );

  return <div className={gridClasses}>{children}</div>;
};

export default Container;

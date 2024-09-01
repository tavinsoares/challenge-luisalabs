import classnames from "classnames"
import { ContainerCardProps } from "../card.types";
import { CardContext } from "../context";

const Container = ({
  children,
  card,
  classNames
}: React.PropsWithChildren<ContainerCardProps>) => {
  if (!card) return null;

  const containerClasses = classnames("tw-min-w-52 tw-max-w-64 md:tw-max-w-64 tw-py-2 tw-px-3 tw-border tw-shadow-default", classNames)

  return (
    <CardContext.Provider value={card}>
      <div className={containerClasses}>{children}</div>
    </CardContext.Provider>
  );
};

export default Container;

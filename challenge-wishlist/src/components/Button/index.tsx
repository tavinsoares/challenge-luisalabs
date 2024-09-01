import classnames from "classnames";

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
}

const Button = ({
  onClick,
  classNames,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const buttonClasses = classnames(
    "tw-border-none",
    classNames
  );
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

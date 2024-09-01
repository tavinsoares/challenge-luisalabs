export type PopoverProps = {
  isOpen: boolean;
  trigger: () => JSX.Element;
  content: () => JSX.Element;
};

const Popover: React.FC<PopoverProps> = ({ isOpen, trigger, content }) => {
  return (
    <div className="tw-relative tw-flex">
      {trigger()}
      {isOpen && (
        <div className="tw-bg-white tw-absolute tw-top-[44px] tw-right-1 tw-min-w-36 tw-z-50">
          <div
            className="tw-absolute tw-right-[4px] tw-top-[-12px] tw-w-0 tw-h-0 
                tw-border-l-[6px] tw-border-l-transparent
                tw-border-t-[6px] tw-border-t-transparent
                tw-border-b-[6px] tw-border-b-white
                tw-border-r-[6px] tw-border-r-transparent"
          ></div>
          <div className="tw-p-2 tw-shadow-md">{content()}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;

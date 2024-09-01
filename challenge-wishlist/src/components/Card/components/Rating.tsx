import Typography from "../../Typograph";
import { useCardContext } from "../context";
import _map from "lodash/map";

const Start = ({ isValid }: { isValid: boolean }) => (
  <span>
    <svg
      viewBox="0 0 24 24"
      fill={isValid ? "#ecda60" : "#000000"}
      className="tw-w-4 tw-h-4"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
);

const Rating = () => {
  const context = useCardContext();
  const { rating } = context;
  const rest = Math.trunc(5 - rating);

  return (
    <>
      <div className="tw-flex">
        {_map(Array(Math.round(rating)), (item, index) => (
          <Start isValid key={`rating_${index}`} />
        ))}
        {_map(Array(Math.round(rest)), (item, index) => (
          <Start isValid={false} key={`noRating_${index}`} />
        ))}
        <Typography
          preset="legalText"
          htmlTag="span"
          color="black"
          weight="regular"
          classNames="tw-ml-1"
        >
          {rating}
        </Typography>
      </div>
    </>
  );
};

export default Rating;

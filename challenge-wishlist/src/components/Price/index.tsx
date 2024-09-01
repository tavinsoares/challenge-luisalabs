import Typography from "../Typograph";
import { formatterCurrency } from "../../utils/formaterCurrency";

export type PriceProps = {
  price: string;
  oldPrice?: string;
};

const Price: React.FC<PriceProps> = ({ price, oldPrice }) => {
  return (
    <>
      {oldPrice && (
        <Typography
          preset="legalText"
          htmlTag="p"
          weight="regular"
          color="gray"
          decoration="stroke"
        >{formatterCurrency(oldPrice)}</Typography>
      )}
      <Typography
        preset="bodyText"
        htmlTag="p"
        weight="bold"
        color="purple"
      >{formatterCurrency(price)}</Typography>
    </>
  );
};

export default Price;

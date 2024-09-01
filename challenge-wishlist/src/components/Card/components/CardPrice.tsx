import Price from "../../Price";
import { useCardContext } from "../context";

const CardPrice = () => {
  const context = useCardContext();

  const { price, oldPrice } = context;

  return <Price price={price} oldPrice={oldPrice} />;
};

export default CardPrice

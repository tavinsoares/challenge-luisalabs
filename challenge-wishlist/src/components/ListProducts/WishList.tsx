import { ICard } from "../Card/card.types";
import _size from "lodash/size";

import _map from "lodash/map";
import ContainerList from "./components/Container";
import ProductCard from "./components/ProductCard";
import Typography from "../Typograph";

type WishListProps = {
  wishList: Array<ICard>;
  handleItemCard: (product: ICard) => void;
};

const WishList: React.FC<WishListProps> = ({ wishList, handleItemCard }) => {
  if (!_size(wishList)) {
    return (
      <Typography classNames="tw-mt-3" preset="h3" color="black" weight="regular" htmlTag="p">
        Voce ainda não tem produtos na sua lista de desejos!
      </Typography>
    );
  }
  return (
    <ContainerList>
      {!_size(wishList) && (
        <Typography preset="h3" color="black" weight="regular" htmlTag="p">
          Voce ainda não tem produtos na sua lista de desejos!
        </Typography>
      )}
      {_map(wishList, (product) => {
        return (
          <ProductCard
            iconName="close"
            product={product}
            handleItemCard={handleItemCard}
            key={product.id}
          />
        );
      })}
    </ContainerList>
  );
};

export default WishList;

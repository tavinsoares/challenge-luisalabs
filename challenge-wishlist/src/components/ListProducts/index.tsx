import { ICard } from "../Card/card.types";

import _map from "lodash/map";
import ContainerList from "./components/Container";
import ProductCard from "./components/ProductCard";

type ListProductsProps = {
  products: Array<ICard & { alreadyWishList?: boolean }>;
  handleItemCard: (product: ICard & { alreadyWishList?: boolean }) => void;
};

const ListProducts: React.FC<ListProductsProps> = ({
  products,
  handleItemCard,
}) => {
  return (
    <ContainerList>
      {_map(products, (product) => {
        return (
          <ProductCard
            active={product.alreadyWishList}
            iconName="heartOutline"
            product={product}
            handleItemCard={handleItemCard}
            key={product.id}
            buttonClasses="tw-bg-gray-400 tw-rounded-full"
          />
        );
      })}
    </ContainerList>
  );
};

export default ListProducts;

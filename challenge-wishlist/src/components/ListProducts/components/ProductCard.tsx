import { ICard } from "../../Card/card.types";
import classnames from "classnames";

import { Container, Description, Image, Rating, Price } from "../../Card";
import Button from "../../Button";
import Icon from "../../Icons";

type ListProductsProps = {
  product: ICard;
  handleItemCard: (product: ICard) => void;
  active?: boolean,
  iconName: string,
  buttonClasses?: string
};

const Product: React.FC<ListProductsProps> = ({
  product,
  handleItemCard,
  active,
  iconName,
  buttonClasses
}) => {
  const buttonClassNames = classnames(
    "tw-cursor-pointer tw-p-1 tw-absolute tw-right-4",
    {
      "tw-bg-red-400": active,
    },
    buttonClasses
  );
  return (
    <Container classNames="tw-relative tw-mx-auto" card={product}>
      <Button
        classNames={buttonClassNames}
        onClick={() => {
          handleItemCard(product);
        }}
      >
        <Icon name={iconName} width={24} widths={24} />
      </Button>
      <Image />
      <Description classNames="tw-mt-2 tw-mb-1" />
      <Rating />
      <div className="tw-mt-2">
        <Price />
      </div>
    </Container>
  );
};

export default Product;

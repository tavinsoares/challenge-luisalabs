export interface ICard {
  id?: string;
  image: string;
  oldPrice?: string;
  price: string;
  rating: number;
  name: string;
}

type ClassNameProps = {
  classNames?: string;
};

export type ContainerCardProps = {
  card: ICard;
} & ClassNameProps;

export type DescriptionProps = ClassNameProps;

export class ProductDTO {
    id: string;
    image: string;
    oldPrice: string;
    price: string;
    rating: number;
    name: string;

    constructor(id, image, oldPrice, price, rating, name) {
        this.id = id;
        this.image = image;
        this.oldPrice = oldPrice;
        this.price = price;
        this.rating = rating;
        this.name = name
    }
  }
  
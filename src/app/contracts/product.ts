export class ProductInterface {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}

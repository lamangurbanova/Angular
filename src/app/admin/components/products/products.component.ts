import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  products: ProductInterface[] = [];
  newId: string;
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {
    this.getProducts();

    // setTimeout(() => {
    //   this.postProducts();
    // }, 2000);

    // setTimeout(() => {
    //   this.deleteProduct();
    // }, 4000);
  }

  private getProducts(): void {
    this.httpClientService
      .get<ProductInterface[]>({
        controller: 'products',
      })
      .subscribe((data) => {
        this.products = data;

        const validIds = this.products
          .map((p) => Number(p.id))
          .sort((a, b) => a - b);

        this.newId = String(validIds[validIds.length - 1] + 1);
      });
  }
  private postProducts(): void {
    this.httpClientService
      .post<ProductInterface>(
        {
          controller: 'products',
        },
        {
          id: this.newId,
          title: 'New Product',
          price: 100.99,
          description: 'Your perfect product',
          category: "men's clothing",
          rating: {
            count: 100,
            rate: 3.9,
          },
        }
      )
      .subscribe();
  }
  private deleteProduct(): void {
    this.httpClientService
      .delete<ProductInterface>(
        {
          controller: 'products',
        },
        '21'
      )
      .subscribe();
  }
}

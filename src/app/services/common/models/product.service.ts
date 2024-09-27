import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { ProductInterface } from 'src/app/contracts/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  createProduct(product: ProductInterface, call: any) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe((res) => {
        call();
      });
  }
}

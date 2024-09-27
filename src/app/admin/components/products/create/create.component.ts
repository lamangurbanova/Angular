import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ProductInterface } from 'src/app/contracts/product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseComponent {

  constructor(private productervice: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spinner)
  }

  create(
    title: HTMLInputElement,
    price: HTMLInputElement,
    desc: HTMLTextAreaElement,
    rate: HTMLInputElement,
    count: HTMLInputElement,

  ) {

    this.showSpinner(SpinnerType.BallAtom)

    const product: ProductInterface = new ProductInterface();
    // product.id = Math.random().toString(36).substr(2, 9);
    product.title = title.toString();
    product.price = parseFloat(price.value);
    product.description = desc.value;
    product.rating = {
      count: parseInt(count.value),
      rate: parseFloat(rate.value),
    };

    this.productervice.createProduct(product, ()=> {this.hideSpinner(SpinnerType.BallAtom), this.alertify.message("Product created",{
        messageType: MessageType.Success,
        position: Position.BottomLeft,
        delay: 3,
      })
    });
  }
}

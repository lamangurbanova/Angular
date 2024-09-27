import { Component } from '@angular/core';
import {
  CustomToastrService,
  Position,
  ToastrMessageType,
} from './services/ui/custom-toastr.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private toastrService: CustomToastrService) {
    // toastrService.message('Welcome to our application!', 'Welcome', {
    //   messageType: ToastrMessageType.Error,
    //   position: Position.TopCenter,
    // });
  }
}

// $(document).ready(function() {
//   alert("First")
// })

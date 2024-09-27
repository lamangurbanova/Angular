import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}
  ngOnInit(): void {
    // this.alertify.message('Welcome to the Admin Panel', {
    //   messageType: MessageType.Success,
    //   position: Position.BottomLeft,
    //   delay: 5,
    // });
  }
}

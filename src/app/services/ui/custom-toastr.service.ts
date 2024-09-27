import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}

  message(message: string, title: string, options: Partial<ToastrOptions>) {
    this.toastr[options.messageType](message, title, {
      positionClass: options.position,
    });
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: Position;
}

export enum ToastrMessageType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export enum Position {
  TopLeft = 'toast-top-left',
  TopRight = 'toast-top-right',
  BottomLeft = 'toast-bottom-left',
  BottomRight = 'toast-bottom-right',
  TopCenter = 'toast-top-center',
  BottomFullWidth = 'toast-bottom-full-width',
  TopFullWidth = 'toast-bottom-full-width',
}

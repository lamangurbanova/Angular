import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier', 'delay', options.delay);
    alertify[options.messageType](message);
  }
}

export enum MessageType {
  Success = 'success',
  Message = 'message',
  Warning = 'warning',
  Notify = 'notify',
  Error = 'error',
}

export enum Position {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  TopCenter = 'top-center',
  BottomCenter = 'bottom-center',
}

export class AlertifyOptions {
  position: Position = Position.BottomRight;
  messageType: MessageType = MessageType.Message;
  delay: number = 3;
}

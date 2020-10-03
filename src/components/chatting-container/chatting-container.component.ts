import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatting-container',
  templateUrl: './chatting-container.component.html',
  styleUrls: ['./chatting-container.component.css'],
})
export class ChattingContainerComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();

  inputMessage: string = '';

  constructor() {}

  ngOnInit() {}

  sendInput() {
    if (this.inputMessage != '') {
      this.sendMessage.emit(this.inputMessage);
      this.inputMessage = '';
    }
  }
}

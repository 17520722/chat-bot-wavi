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

  //Hàm xử lý sự kiện khi người dùng gửi tin nhắn
  //Hàm này sẽ emit sự kiện lên component cha (chatting-area)
  sendInput() {
    if (this.inputMessage != '') {
      this.sendMessage.emit(this.inputMessage);
      this.inputMessage = '';
    }
  }
}

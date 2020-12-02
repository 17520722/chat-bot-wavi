import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LearnService } from '../../services/learn.service';

@Component({
  selector: 'app-chatting-container',
  templateUrl: './chatting-container.component.html',
  styleUrls: ['./chatting-container.component.css'],
  providers: [LearnService],
})
export class ChattingContainerComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();

  inputMessage: string = '';

  constructor(private learnService: LearnService) {}

  ngOnInit() {
  }

  //Hàm xử lý sự kiện khi người dùng gửi tin nhắn
  //Hàm này sẽ emit sự kiện lên component cha (chatting-area)
  sendInput() {
    if (this.inputMessage != '') {
      let messObj = {
        message: this.inputMessage,
        isBot: false
      }

      this.sendMessage.emit(messObj);  
      this.getBotMessageAPI();

      this.inputMessage = '';
    }
  }

  //Lây bot message từ Service
  getBotMessageAPI() {
    this.learnService.getBotMessage(this.inputMessage).subscribe(data => {
      var messIndex = Math.floor(Math.random() * (data['messageContent'].length) - 0.00001);

      if (messIndex < 0) {
        messIndex = -messIndex;
      }

      let messObj = {
        message: data['messageContent'][messIndex],
        isBot: true
      }

      console.log(messIndex);
      console.log(messObj);
      this.sendMessage.emit(messObj);
    }, err => console.log(err));
  }
}

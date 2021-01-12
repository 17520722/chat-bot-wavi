import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LearnService } from '../../services/learn.service';
import { stringify } from 'querystring';

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

  getAutoFillRes(message: string) {
    let str = message.split('[res]');
    return str[1];
  }

  //Lây bot message từ Service
  getBotMessageAPI() {
    this.learnService.getBotMessage(this.inputMessage).subscribe(data => {
      var arrMessage = data['messageContent'];
      
        for (var messIndex = 0; messIndex < arrMessage.length; messIndex++) {
          let messObj;

          if (messIndex >= arrMessage.length - 1) {
            console.log();

            if (String(arrMessage[messIndex]).includes('[res]')) {
              
              messObj = {
                message: this.getAutoFillRes(arrMessage[messIndex]),
                isBot: true,
                isEnd: true,
                isRes: true
              } 
            }
            else {
              messObj = {
                message: arrMessage[messIndex],
                isBot: true,
                isEnd: true,
                isRes: false
              } 
            }
          } else {
            console.log(String(arrMessage[messIndex]).includes('[res]'));
            if (String(arrMessage[messIndex]).includes('[res]')) {
              messObj = {
                message: this.getAutoFillRes(arrMessage[messIndex]),
                isBot: true,
                isEnd: false,
                isRes: true
              } 
            }
            else {
              messObj = {
                message: arrMessage[messIndex],
                isBot: true,
                isEnd: false,
                isRes: false
              } 
            }
          }
          console.log(messObj);
          this.sendMessage.emit(messObj);
        }
    }, err => console.log(err));
  }
}

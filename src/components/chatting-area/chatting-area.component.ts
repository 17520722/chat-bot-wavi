import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatting-area',
  templateUrl: './chatting-area.component.html',
  styleUrls: ['./chatting-area.component.css']
})
export class ChattingAreaComponent implements OnInit {

  inputMessage = '';
  messageList = [
    {
      isBot: false,
      message: 'This is the message of user'
    },
    {
      isBot: true,
      message: 'This is the message of bot'
    },
    {
      isBot: true,
      message: 'This is demo text dmosa  das dad  fe ggeg adde casc  awcwac cacaww wa w c aw  cacaca a'
    },
    {
      isBot: false,
      message: 'This is the message of user'
    },
    {
      isBot: true,
      message: 'This is demo text dmosa  das dad  fe ggeg adde casc  awcwac cacaww wa w c aw  cacaca a'
    },
    {
      isBot: false,
      message: 'This is the message of user'
    },
    {
      isBot: true,
      message: 'This is demo text dmosa  das dad  fe ggeg adde casc  awcwac cacaww wa w c aw  cacaca a'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  sendMessageArea(content:string) {
    let messObj = {
      isBot: false,
      message: content
    };

    this.messageList.push(messObj);
  }
}

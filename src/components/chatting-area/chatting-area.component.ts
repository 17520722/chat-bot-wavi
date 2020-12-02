import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chatting-area',
  templateUrl: './chatting-area.component.html',
  styleUrls: ['./chatting-area.component.css'],
})
export class ChattingAreaComponent implements OnInit, AfterViewChecked {
  //Tham chiếu biến DOM #scrollMe với myScrollContainer qua ElementRef 
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  inputMessage = '';

  //data dem0
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
    {
      isBot: false,
      message: 'This is the message of user'
    },
    {
      isBot: true,
      message: 'This is demo text dmosa  das dad  fe ggeg adde casc  awcwac cacaww wa w c aw  cacaca a'
    },
  ];

  constructor() {}

  //Khởi tạo cho interface
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit() {
  }

  //Hàm xủ lý sự kiện người dùng gửi tin nhắn đến bot
  //Nhận content là một message Object
  sendMessageArea(content) {
    let messObj;

    if (!content['isBot']){
      messObj = {
        isBot: false,
        message: content['message']
      };
    }
    else{
      messObj = {
        isBot: true,
        message: content['message']
      };
    }

    this.messageList.push(messObj);
  }

  scrollToBottom() {
    //Scroll tin nhắn lên trên bằng với chiều cao của khối chat-field
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }  
  }
}

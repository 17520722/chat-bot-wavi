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
      isBot: true,
      message: 'chào bạn!',
      isEnd: true,
      isRes: false
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
        message: content['message'],
        isEnd: content['isEnd']
      };
    }
    else{
      messObj = {
        isBot: true,
        message: content['message'],
        isEnd: content['isEnd'],
        isRes: content['isRes']
      };
    }

    this.messageList.push(messObj);
  }

  resAuto(event) {
    this.sendMessageArea(event);
  }

  scrollToBottom() {
    //Scroll tin nhắn lên trên bằng với chiều cao của khối chat-field
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }  
  }
}

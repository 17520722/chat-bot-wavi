import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { LearnService } from 'src/services/learn.service';

@Component({
  selector: 'app-message-bot',
  templateUrl: './message-bot.component.html',
  styleUrls: ['./message-bot.component.css'],
  animations: [
    trigger('trigger', [
      state('opacity', style({
        opacity: 0
      })),
      state('opacity1', style({
        opacity: 1
      })),
      transition('opacity => opacity1', animate('200ms ease-in')),
    ])
  ]
})
export class MessageBotComponent implements OnInit, AfterViewInit{

  @Input() content:string = '';
  @Input() isShowAvatar = true;
  @Input() isRes = false;
  @Output() isClickMessage = new EventEmitter<any>();

  styleRes = {
    'cursor': 'pointer',
    'color': '#1976d2',
    'user-select': 'none'
  }

  state = 'opacity';

  isImg: boolean = false;
  isLink: boolean = false;

  constructor(private botSrv: LearnService) { }

  ngAfterViewInit(): void {
    this.state = 'opacity1';
  }

  ngOnInit() {
    if ((this.content.indexOf('.jpg') != -1 || this.content.indexOf('.png') != -1) && 
        this.content.indexOf('http' || 'https') != -1) {
      this.isImg = true;
    }
    else if (this.content.indexOf('http') != -1 || this.content.indexOf('https') != -1){
      this.isLink = true;
    }
  }

  onClickMessage() {
    if (this.isRes) {
      let messObj = {
        message: this.content,
        isBot: false
      }

      this.isClickMessage.emit(messObj);
      this.getBotMessageAPI();
    }
  }
  
  getAutoFillRes(message: string) {
    let str = message.split('[res]');
    return str[1];
  }

  getBotMessageAPI() {
    this.botSrv.getBotMessage(this.content).subscribe(data => {
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

          this.isClickMessage.emit(messObj);
        }
    }, err => console.log(err));
  }
}

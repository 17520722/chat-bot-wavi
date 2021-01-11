import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-bot',
  templateUrl: './message-bot.component.html',
  styleUrls: ['./message-bot.component.css']
})
export class MessageBotComponent implements OnInit {

  @Input() content:string = '';

  isImg: boolean = false;
  isLink: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.content.indexOf('.jpg' || '.png') != -1 && 
        this.content.indexOf('http' || 'https') != -1) {
      this.isImg = true;
    }
    else if (this.content.indexOf('http' || 'https') != -1){
      this.isLink = true;
    }
  }

}

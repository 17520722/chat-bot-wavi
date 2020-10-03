import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-bot',
  templateUrl: './message-bot.component.html',
  styleUrls: ['./message-bot.component.css']
})
export class MessageBotComponent implements OnInit {

  @Input() content:string = '';

  constructor() { }

  ngOnInit() {
  }

}

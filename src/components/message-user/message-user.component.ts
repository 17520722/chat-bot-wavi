import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-user',
  templateUrl: './message-user.component.html',
  styleUrls: ['./message-user.component.css']
})
export class MessageUserComponent implements OnInit {

  @Input() content:string = '';

  constructor() { }

  ngOnInit() {
  }

}

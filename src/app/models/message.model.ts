export class Message {
     private _messageContent: string;
     public get messageContent(): string {
          return this._messageContent;
     }
     public set messageContent(value: string) {
          this._messageContent = value;
     }

     
     private _isBot: boolean;
     public get isBot(): boolean {
          return this._isBot;
     }
     public set isBot(value: boolean) {
          this._isBot = value;
     }

}

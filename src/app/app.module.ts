import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendQuestionComponent } from 'src/components/recommend-question/recommend-question.component';
import { TextRecommendComponent } from 'src/components/text-recommend/text-recommend.component';
import { ChattingAreaComponent } from 'src/components/chatting-area/chatting-area.component';
import { ChattingContainerComponent } from 'src/components/chatting-container/chatting-container.component';
import { MessageBotComponent } from 'src/components/message-bot/message-bot.component';
import { MessageUserComponent } from 'src/components/message-user/message-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendQuestionComponent,
    TextRecommendComponent,
    ChattingAreaComponent,
    ChattingContainerComponent,
    MessageBotComponent,
    MessageUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

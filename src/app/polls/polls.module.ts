import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollsRoutingModule } from './polls-routing.module';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

@NgModule({
  declarations: [
    PollDetailComponent, 
    PollListComponent
  ],
  imports: [
    CommonModule,
    PollsRoutingModule
  ]
})
export class PollsModule { }

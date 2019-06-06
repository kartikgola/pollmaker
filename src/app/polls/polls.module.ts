import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollsRoutingModule } from './polls-routing.module';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

@NgModule({
  declarations: [PollDetailComponent],
  imports: [
    CommonModule,
    PollsRoutingModule
  ]
})
export class PollsModule { }

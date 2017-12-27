import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeingPage } from './seeing';

@NgModule({
  declarations: [
    SeeingPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeingPage),
  ],
})
export class SeeingPageModule {}

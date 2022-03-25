import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ShowOnlyTheLastFourPipe } from './components/show-only-the-last-four.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    ShowOnlyTheLastFourPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ShowOnlyTheLastFourPipe
  ]
})
export class ShareModule { }

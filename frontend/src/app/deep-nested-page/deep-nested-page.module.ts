import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeepNestedPageComponent } from './deep-nested-page.component';

@NgModule({
  declarations: [DeepNestedPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeepNestedPageComponent,
      },
    ]),
  ],
})
export class DeepNestedPageModule {}

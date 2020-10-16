import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1.component';

@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Page1Component,
      },
    ]),
  ],
})
export class Page1Module {}

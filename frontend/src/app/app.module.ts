import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'page1',
        loadChildren: () =>
          import('./page1/page1.module').then((m) => m.Page1Module),
      },
      {
        path: 'deep/nested/page',
        loadChildren: () =>
          import('./deep-nested-page/deep-nested-page.module').then(
            (m) => m.DeepNestedPageModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

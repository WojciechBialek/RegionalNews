import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { ArticleComponent } from './article/article.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PageSizeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

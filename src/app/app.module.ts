import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PageSizeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

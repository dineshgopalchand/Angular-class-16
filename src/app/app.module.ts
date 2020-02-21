import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './services/course.service';
import { DataEventComponent } from './data-event/data-event.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { KeyValuePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextFormatingPipe } from './common/pipes/text-formating.pipe';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BasicComponent } from './layout/basic/basic.component';
import { HeaderComponent } from './common/header/header.component';
import { DirectiveComponent } from './directive/directive.component';
import { NameValidationDirective } from './common/directive/name-validation.directive';
import { ShowCustomDirectiveComponent } from './show-custom-directive/show-custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataEventComponent,
    BindingComponent,
    PipesComponent,
    CarouselComponent,
    TextFormatingPipe,
    ProductViewComponent,
    ProductListComponent,
    BasicComponent,
    HeaderComponent,
    DirectiveComponent,
    NameValidationDirective,
    ShowCustomDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CourseService,
    KeyValuePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

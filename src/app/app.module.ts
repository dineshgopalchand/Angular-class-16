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
import { KeyValuePipe } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextFormatingPipe } from './common/pipes/text-formating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataEventComponent,
    BindingComponent,
    PipesComponent,
    CarouselComponent,
    TextFormatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CourseService,
    KeyValuePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

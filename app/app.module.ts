import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateDrivenComponent }  from './app.component';


@NgModule({
    imports:      [ BrowserModule,FormsModule ],
    declarations: [ TemplateDrivenComponent,
        
         ],
    bootstrap:    [ TemplateDrivenComponent ]
})
export class AppModule { }

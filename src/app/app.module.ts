import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EplListComponent } from './epl-list/epl-list.component';
import { EplDetailsComponent } from './epl-details/epl-details.component';
import { EplCreateComponent } from './epl-create/epl-create.component';
import { EplUpdateComponent } from './epl-update/epl-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EplListComponent,
    EplDetailsComponent,
    EplCreateComponent,
    EplUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

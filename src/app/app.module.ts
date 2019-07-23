import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { mockHttpInterceptor } from './helpers/mockBackend';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    mockHttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

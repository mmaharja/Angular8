import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { mockHttpInterceptor } from './helpers/mockBackend';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    mockHttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

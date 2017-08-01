import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule, RoutingComponents } from './routing/routing-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendsComponent } from './components/first/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

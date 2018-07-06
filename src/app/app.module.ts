// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http'


// import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// // import { warningAlert } from './warning/warning-alert.component';
// // import { successAlert } from './success/success-alert.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ServerComponent,
//     ServersComponent
//     //,
//     // warningAlert,
//     // successAlert
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }















import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }










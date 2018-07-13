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

//First App of recipes and shopping
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';



@NgModule({
  declarations: [
    AppComponent ,
    ServerComponent,
    ServersComponent,

    //First App of recipes and shopping
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent

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










// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http'


// import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// import { CookpitComponent } from './cookpit/cookpit.component';
// import { ServerElementComponent } from './server-element/server-element.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ServerComponent,
//     ServersComponent,
//     CookpitComponent,
//     ServerElementComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//    ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }









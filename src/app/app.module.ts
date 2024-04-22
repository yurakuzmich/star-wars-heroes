import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { PeopleModule } from './people/people.module';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './layout/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './layout/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuItemComponent,
    MainMenuComponent,
    MainPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PeopleModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Route } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WallComponent } from './components/wall/wall.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { StoresComponent } from './components/stores/stores.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyService } from './services/company.service';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './services/user.service';
import { StoreService } from './services/store.service';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CompanyCreateComponent } from './components/company-create/company-create.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { GlobalErrorHandler } from './services/global-error-handler';
import { AlertDirective } from './directives/alert.directive';
import { AlertComponent } from './components/alert/alert.component';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { AuthDirective } from './directives/auth.directive';


const routerConfig: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'wall', pathMatch: 'full', canActivate:[AuthGuard] },
      { path: 'wall', component: WallComponent , canActivate:[AuthGuard]},
      { path: 'company', component: CompaniesComponent, canActivate:[AuthGuard] },
      { path: 'company/create', component: CompanyCreateComponent, canActivate:[AuthGuard] },
      { path: 'company/:id', component: CompanyDetailComponent, canActivate:[AuthGuard] },
      { path: 'store', component: StoresComponent , canActivate:[AuthGuard]},
      { path: 'store/:id', component: StoreDetailComponent, canActivate:[AuthGuard] },
      { path: 'store/:id/notification', component: NotificationsComponent , canActivate:[AuthGuard]},
      { path: 'profile', component: ProfileComponent , canActivate:[AuthGuard]},
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CompaniesComponent,
    StoresComponent,
    PageNotFoundComponent,
    CompanyDetailComponent,
    ProfileComponent,
    StoreDetailComponent,
    NotificationsComponent,
    CompanyCreateComponent,
    AlertDirective,
    AlertComponent,
    CardStoreComponent,
    AuthDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    HttpClientModule,
    FormsModule

  ],
  providers: [
    UserService,
    StoreService,
    CompanyService,
    AuthService,
    AuthGuard,
    ErrorHandlerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CookieService
    // { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

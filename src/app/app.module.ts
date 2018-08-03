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
import { GlobalErrorHandler } from './models/global-error-handler';


const routerConfig: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
      { path: 'wall', component: WallComponent },
      { path: 'company', component: CompaniesComponent },
      { path: 'company/create', component: CompanyCreateComponent },
      { path: 'company/:id', component: CompanyDetailComponent },
      { path: 'store', component: StoresComponent },
      { path: 'store/:id', component: StoreDetailComponent },
      { path: 'store/:id/notification', component: NotificationsComponent },
      { path: 'profile', component: ProfileComponent },
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
    CompanyCreateComponent
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
    // { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

const routerConfig: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'company', component: CompaniesComponent},
      {path: 'company/:id', component: CompanyDetailComponent},
      {path: 'store', component: StoresComponent}
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
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    HttpClientModule,
    FormsModule
   
  ],
  providers: [CompanyService,AuthService,AuthGuard, {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

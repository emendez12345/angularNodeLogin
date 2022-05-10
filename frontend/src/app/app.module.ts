import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import{HttpClientModule} from '@angular/common/http';

import { CategoriaEditComponent } from './components/categoria-edit/categoria-edit.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ArticuloEditComponent } from './components/articulo-edit/articulo-edit.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';

//import { AppRoutingModule } from './app-routing.module';

//import { UserComponent } from './user/user.component';
//import{DataService} from './data.service';

//MODULES
import{FormsModule} from '@angular/forms'
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';




const appRoutes:Routes =[
  {path:'home',
  component:HomeComponent
 },
 {path:'private',
 component:PrivateComponent, canActivate: [AuthGuard]
},
{path:'admin',
component:AdminComponent
},
{path:'login',
component:LoginComponent
},
{path:'register',
component:RegisterComponent
},
{
  path: '**', pathMatch:'full', redirectTo: 'home'
},
/*
  {path:'categorias',
   component:CategoriasComponent
  },
  {path:'categorias/ed/:id',
   component:CategoriaEditComponent
  },
  {path:'articulos',
   component:ArticulosComponent},
  {path:'articulos/ed/:id',
   component:ArticuloEditComponent
  },*/

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaEditComponent,
   CategoriasComponent,
   ArticulosComponent,
  ArticuloEditComponent,
  HomeComponent,
  PrivateComponent,
  AdminComponent,
  LoginComponent,
  RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  //  AppRoutingModule(approutes),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    {provide: JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/page/home-page.component';
import { AboutComponent } from './pages/about/page/about.component';
import { ContactComponent } from './pages/contact/page/contact.component';
import { SubPageOneComponent } from './pages/subPages/sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './pages/subPages/sub-page-two/sub-page-two.component';
import { SubPageThreeComponent } from './pages/subPages/sub-page-three/sub-page-three.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'nosotros',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'servicios',
    children:[
      {
        path: 'subpageone',
        component: SubPageOneComponent
      },
      {
        path: 'subpagetwo',
        component: SubPageTwoComponent
      },
      {
        path: 'subpagethree',
        component: SubPageThreeComponent
      },
      {
        path:'**',
        redirectTo: 'subPageOne'
      }
    ]
    // loadChildren: () => import('./pages/subPages/sub-pages.module').then( m => m.SubPagesModule )
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {  }

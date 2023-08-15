import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubPageOneComponent } from './sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './sub-page-two/sub-page-two.component';
import { SubPageThreeComponent } from './sub-page-three/sub-page-three.component';
import { SubPagesModule } from './sub-pages.module';




const routes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class SubPagesRoutingModule {  }

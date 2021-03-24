import { DesignComponent } from './main-ui/sections/design/design.component';
import { ReconstructingComponent } from './main-ui/sections/reconstructing/reconstructing.component';
import { ConstructingComponent } from './main-ui/sections/constructing/constructing.component';
import { SingleProjectComponent } from './main-ui/sections/portfolio/single-project/single-project.component';
import { AuthGuard } from './admin/auth/auth.guard';
import { OtherComponent } from './admin/admin-ui/other/other.component';
import { ChangeExamplesComponent } from './admin/admin-ui/change-examples/change-examples.component';
import { ChangePortfolioComponent } from './admin/admin-ui/change-portfolio/change-portfolio.component';
import { AuthComponent } from './admin/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainUiComponent } from './main-ui/main-ui.component';
import { SandblastingComponent } from './main-ui/sections/sandblasting/sandblasting.component';


const routes: Routes = [
  { path: '', component: MainUiComponent },
  { path: 'login', component: AuthComponent },
  { path: 'project/:id', component: SingleProjectComponent },
  { path: 'constructing', component: ConstructingComponent },
  { path: 'sandblasting', component: SandblastingComponent },

  { path: 'reconstructing', component: ReconstructingComponent },
  { path: 'design', component: DesignComponent },

  // admin routes
  { path: 'project-form', component: ChangePortfolioComponent, canActivate: [AuthGuard] },
  { path: 'example-form', component: ChangeExamplesComponent, canActivate: [AuthGuard] },
  { path: 'other', component: OtherComponent, canActivate: [AuthGuard] },
  { path: '**', component: MainUiComponent },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
}
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainUiComponent,
  AuthComponent,
  ChangePortfolioComponent,
  ChangeExamplesComponent,
  OtherComponent,
  SingleProjectComponent,
  ConstructingComponent,
  ReconstructingComponent,
  DesignComponent
];

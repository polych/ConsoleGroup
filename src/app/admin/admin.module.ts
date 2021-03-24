import { ChangeExamplesComponent } from './admin-ui/change-examples/change-examples.component';
import { ChangePortfolioComponent } from './admin-ui/change-portfolio/change-portfolio.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule} from '@angular/common/http';
import { DropzoneDirective } from './admin-ui/change-examples/dropzone.directive';
import { UploadTaskComponent } from './admin-ui/change-examples/upload-task/upload-task.component';
import { OtherComponent } from './admin-ui/other/other.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    AdminMenuComponent
  ],
  declarations: [
    AdminUiComponent,
    ChangePortfolioComponent,
    AuthComponent,
    AdminMenuComponent,
    ChangeExamplesComponent,
    DropzoneDirective,
    UploadTaskComponent,
    OtherComponent,

  ],

  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class AdminModule { }

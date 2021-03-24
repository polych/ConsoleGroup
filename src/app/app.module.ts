import { ContactsComponent } from './main-ui/sections/contacts/contacts.component';
import { PrinciplesComponent } from './main-ui/sections/principles/principles.component';
import { ExamplesComponent } from './main-ui/sections/examples/examples.component';
import { PackagesComponent } from './main-ui/sections/packages/packages.component';
import { WhyWeComponent } from './main-ui/sections/why-we/why-we.component';
import { AboutComponent } from './main-ui/sections/about/about.component';
import { PortfolioComponent } from './main-ui/sections/portfolio/portfolio.component';
import { HeaderComponent } from './main-ui/header/header.component';
import { AdminModule } from './admin/admin.module';
import { DataService } from './core/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainUiComponent } from './main-ui/main-ui.component';
import { SingleProjectComponent } from './main-ui/sections/portfolio/single-project/single-project.component';
import { ConstructingComponent } from './main-ui/sections/constructing/constructing.component';
import { ReconstructingComponent } from './main-ui/sections/reconstructing/reconstructing.component';
import { DesignComponent } from './main-ui/sections/design/design.component';
import { HeaderMinComponent } from './main-ui/header-min/header-min.component';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { SandblastingComponent } from './main-ui/sections/sandblasting/sandblasting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    WhyWeComponent,
    PackagesComponent,
    ExamplesComponent,
    PrinciplesComponent,
    ContactsComponent,
    MainUiComponent,
    SingleProjectComponent,
    ConstructingComponent,
    ReconstructingComponent,
    DesignComponent,
    HeaderMinComponent,
    SandblastingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    CrystalLightboxModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

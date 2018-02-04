import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CivilComponent } from './civil/civil.component';
import { PenalComponent } from './penal/penal.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TelecomunicacionesComponent } from './telecomunicaciones/telecomunicaciones.component';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { LitigioComponent } from './litigio/litigio.component';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { ComercioComponent } from './comercio/comercio.component';
import { FusionComponent } from './fusion/fusion.component';
import { InmobiliarioComponent } from './inmobiliario/inmobiliario.component';
import { CharuaComponent } from './charua/charua.component';
import { AriasComponent } from './arias/arias.component';
import { MaciasComponent } from './macias/macias.component';
import { PrumComponent } from './prum/prum.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EscribirComponent } from './escribir/escribir.component';

import { AUTH_DECLARATIONS } from "./auth/index";





import { ContactoComponent } from './contacto/contacto.component';


import { FooterComponent } from './footer/footer.component';


@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        NosotrosComponent,
        ContactoComponent,
        CivilComponent,
        PenalComponent,
        PropiedadComponent,
        PrivacidadComponent,
        TelecomunicacionesComponent,
        FarmaceuticoComponent,
        TecnologiaComponent,
        LitigioComponent,
        CorporativoComponent,
        AdministrativoComponent,
        ComercioComponent,
        FusionComponent,
        InmobiliarioComponent,
        CharuaComponent,
        AriasComponent,
        MaciasComponent,
        PrumComponent,
        BlogComponent,
        ArticleComponent,
        LoginComponent,
        SignupComponent,
        EscribirComponent,
        FooterComponent,

    ],
    // Entry Components
    entryComponents: [
        AppComponent
    ],
    // Providers
    providers: [
    ],
    // Modules
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    // Main Component
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {

    }
}

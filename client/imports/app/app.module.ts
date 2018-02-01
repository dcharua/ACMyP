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
        FooterComponent
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

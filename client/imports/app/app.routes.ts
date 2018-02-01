import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CivilComponent } from './civil/civil.component';
import { PenalComponent } from './penal/penal.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';



export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'nosotros', component: NosotrosComponent },
	{ path: 'contacto', component: ContactoComponent },
	{ path: 'civil', component: CivilComponent },
	{ path: 'penal', component: PenalComponent },
	{ path: 'propiedad', component: PropiedadComponent },
	{ path: 'privacidad', component: PrivacidadComponent },


	{ path: '**', component: HomeComponent }
];

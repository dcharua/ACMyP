import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';





export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'nosotros', component: NosotrosComponent },
	{ path: 'contacto', component: ContactoComponent },

	{ path: '**', component: HomeComponent }
];

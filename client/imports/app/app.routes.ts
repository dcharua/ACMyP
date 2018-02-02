import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
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






export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'nosotros', component: NosotrosComponent },
	{ path: 'contacto', component: ContactoComponent },
	{ path: 'civil', component: CivilComponent },
	{ path: 'penal', component: PenalComponent },
	{ path: 'propiedad', component: PropiedadComponent },
	{ path: 'privacidad', component: PrivacidadComponent },
	{ path: 'telecomunicaciones', component: TelecomunicacionesComponent },
	{ path: 'farmaceutico', component: FarmaceuticoComponent },
	{ path: 'tecnologia', component: TecnologiaComponent },
	{ path: 'litigio', component: LitigioComponent },
	{ path: 'corporativo', component: CorporativoComponent },
	{ path: 'administrativo', component: AdministrativoComponent },
	{ path: 'comercio', component: ComercioComponent },
	{ path: 'fusion', component: FusionComponent },
	{ path: 'inmobiliario', component: InmobiliarioComponent },
	{ path: 'charua', component: CharuaComponent },
	{ path: 'arias', component: AriasComponent },
	{ path: 'macias', component: MaciasComponent },
	{ path: 'prum', component: PrumComponent },



	{ path: '**', component: HomeComponent }
];

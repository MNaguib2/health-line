import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from './core/components/404/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

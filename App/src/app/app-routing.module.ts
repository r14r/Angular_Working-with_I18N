import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/component';
import { DemoPageComponent } from './pages/demo/component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'demo', component: DemoPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { RecoveryComponent } from './recovery/recovery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'reset-key/:token', component: RecoveryComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true})],
    exports: [ RouterModule ],

})
export class AppRoutingModule {}
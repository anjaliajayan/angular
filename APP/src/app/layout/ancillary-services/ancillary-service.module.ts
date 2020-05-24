import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AncillaryServiceComponent } from './ancillary-service.component';
// import { MealServiceComponent } from './meal-service/meal-service.component';
// import { BaggageServiceComponent } from './baggage-service/baggage-service.component';
// import { DisabilityServiceComponent } from './disability-service/disability-service.component';
import { ModalModule } from '../_modal';

@NgModule({
    declarations: [
        // AncillaryServiceComponent,
        // MealServiceComponent,
        // BaggageServiceComponent,
        // DisabilityServiceComponent
    ],
    imports: [
        CommonModule,
        ModalModule
    ]
})
export class AncillaryServiceModule { }
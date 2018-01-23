import { NgModule }           from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';

import { AlepNg2InputBoxComponent } from "./alep-ng2-input-box.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AlepNg2InputBoxComponent
  ],
  exports: [
    AlepNg2InputBoxComponent
  ],
  providers:    [ ]
})
export class AlepNg2InputBoxModule { }

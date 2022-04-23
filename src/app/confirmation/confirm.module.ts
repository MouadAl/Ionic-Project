import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmRoutingModule } from './confirm-routing.module';

import { ConfirmPage} from './confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmRoutingModule
  ],
  declarations: [ConfirmPage]
})
export class ConfirmPageModule {}

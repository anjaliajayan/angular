import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EncDecAESComponent } from './enc-dec-aes.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [
    EncDecAESComponent
  ],
  imports: [
    TestRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EncDecAESComponent]
})
export class TestModule { }

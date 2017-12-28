import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationComponent } from "./ng-bootstrap-pagination-component/ng-bootstrap-pagination.component";


@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule,FormsModule],
  exports: [PaginationComponent],
  providers: [],
  bootstrap: []
})
export class PaginationModule {}
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//FormsModule

import { PaginationComponent } from "./components/ngx-pagination-bootstrap-component/ngx-pagination-bootstrap.component";


@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule,FormsModule],
  exports: [PaginationComponent],
  providers: [],
  bootstrap: []
})
export class PaginationModule {}

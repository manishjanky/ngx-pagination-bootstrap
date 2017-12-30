import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { any } from "bluebird";

@Component({
  selector: "ng-pagination",
  templateUrl: "./ngx-pagination-bootstrap.component.html",
  styleUrls: ["./ngx-pagination-bootstrap.component.css"]
})
export class PaginationComponent implements OnInit {
  /*Get the required inputs i.e pageSize and no of items*/
  @Input()  pageSize: number = 10;
  @Input()  itemsCount: number;
  @Input()  data: any = null;
  @Input()  position: string = "left";
  @Output() getPageData = new EventEmitter<any>();
  private currentPage: number = 1;
  private totalPages: any = [];
  private pages: any = [];
  private nullAble: any = null
  constructor() { }

  ngOnInit() {
    if (this.data != null) {
      this.itemsCount = this.data.length;
    }
    this.calculatePageNumbers();
  }

  calculatePageNumbers() {
    let pages = Math.ceil(this.itemsCount / this.pageSize);
    this.totalPages = new Array(pages);
    for (let y = 0; y < this.totalPages.length; y++) {
      this.totalPages[y] = y + 1;
    }
    this.pages = this.totalPages.slice(0, 5);
  }

  navigateToPage(pageNo: number) {
    console.log(pageNo);
    this.currentPage = pageNo;
    let $event = {
      event: event,
      pageNo: pageNo,
      pageSize: this.pageSize,
      data: this.nullAble
    };
    this.changePageData($event);
  }

  changePageData($event: any) {
    this.getPageItems($event);
    this.getNextPagesArrayToDisplay();
  }

  getPageItems($event: any) {
    let thisPageData: any = null;
    if (this.data != null) {
      thisPageData = this.getCurrentPageData();
    }
    $event.data = thisPageData
    this.getPageData.emit($event);
  }

  getCurrentPageData() {
    //return new data data is already available
    let start = ((this.currentPage - 1) * this.pageSize);
    let end = start + Number(this.pageSize);
    return this.data.slice(start, end);
  }
  getNextPagesArrayToDisplay() {
    let startIndex = this.currentPage - 3 >= 0 ? this.currentPage - 3 : 0;
    let endIndex = this.currentPage + 2 < 5 ? 5 : this.currentPage + 2;
    if (endIndex > this.totalPages.length) {
      endIndex = this.totalPages.length;
      startIndex = this.totalPages.length - 5 < 0 ? 0 : this.totalPages.length - 5;
    }
    this.pages = this.totalPages.slice(startIndex, endIndex);
  }

  changePageSize() {
    this.calculatePageNumbers();
    this.currentPage = 1;
    let $event = {
      event: event,
      pageNo: 1,
      pageSize: this.pageSize,
      data: this.nullAble
    };
    this.changePageData($event);
    //might need some other processing later
  }

  nextPage() {
    this.navigateToPage(this.currentPage + 1);
  }

  previousPage() {
    this.navigateToPage(this.currentPage - 1);
  }

}

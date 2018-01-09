import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { any } from "bluebird";

@Component({
  selector: "ng-pagination",
  templateUrl: "./ngx-pagination-bootstrap.component.html",
  styleUrls: ["./ngx-pagination-bootstrap.component.css"]
})
export class PaginationComponent implements OnInit {
  /*Get the required inputs i.e pageSize and no of items*/
  @Input() public pageSize: number;
  @Input() public itemsCount: number;
  @Input() public data: any = null;
  @Input() public position: string = "left";
  @Output() public getPageData = new EventEmitter<any>();
  public currentPage: number = 1;
  public totalPages: any = [];
  public pages: any = [];
  private nullAble: any = null;
  constructor() {
    this.pageSize = 10;
  }

  public ngOnInit() {
    if (this.data != null) {
      this.itemsCount = this.data.length;
    }
    this.calculatePageNumbers();
  }

  public calculatePageNumbers() {
    const pages = Math.ceil(this.itemsCount / this.pageSize);
    this.totalPages = [];
    for (let y = 0; y < pages; y++) {
      this.totalPages[y] = y + 1;
    }
    this.pages = this.totalPages.slice(0, 5);
  }

  public navigateToPage(pageNo: number) {
    this.currentPage = pageNo;
    const $event = {
      event,
      pageNo,
      pageSize: this.pageSize,
      data: this.nullAble
    };
    this.changePageData($event);
  }

  public changePageData($event: any) {
    this.getPageItems($event);
    this.getNextPagesArrayToDisplay();
  }

  public getPageItems($event: any) {
    let thisPageData: any = null;
    if (this.data != null) {
      thisPageData = this.getCurrentPageData();
    }
    $event.data = thisPageData;
    this.getPageData.emit($event);
  }

  public getCurrentPageData() {
    const start = ((this.currentPage - 1) * this.pageSize);
    const end = start + Number(this.pageSize);
    return this.data.slice(start, end);
  }
  public getNextPagesArrayToDisplay() {
    let startIndex = this.currentPage - 3 >= 0 ? this.currentPage - 3 : 0;
    let endIndex = this.currentPage + 2 < 5 ? 5 : this.currentPage + 2;
    if (endIndex > this.totalPages.length) {
      endIndex = this.totalPages.length;
      startIndex = this.totalPages.length - 5 < 0 ? 0 : this.totalPages.length - 5;
    }
    this.pages = this.totalPages.slice(startIndex, endIndex);
  }

  public changePageSize() {
    this.calculatePageNumbers();
    this.currentPage = 1;
    const $event = {
      event,
      pageNo: 1,
      pageSize: this.pageSize,
      data: this.nullAble
    };
    this.changePageData($event);
  }

  public nextPage() {
    this.navigateToPage(this.currentPage + 1);
  }

  public previousPage() {
    this.navigateToPage(this.currentPage - 1);
  }

}

import { Component, OnInit, Input, EventEmitter,Output } from "@angular/core";

@Component({
  selector: "ng-pagination",
  templateUrl: "./ngx-pagination-bootstrap.component.html",
  styleUrls: ["./ngx-pagination-bootstrap.component.css"]
})
export class PaginationComponent implements OnInit {
  /*Get the required inputs i.e pageSize and no of items*/
  @Input() pageSize: number;
  @Input() itemsCount: number;
  @Input() data: any = null;
  @Input() position: string = "left";
  @Output() getPageData = new EventEmitter<any>();
  currentPage: number = 1;
  totalPages: any = [];
  pages: any = [];
  constructor() {}

  ngOnInit() {
    this.calculatePageNumbers();
  }

  calculatePageNumbers() {
    let pages = Math.ceil(this.itemsCount / this.pageSize);
    this.totalPages = Array(pages)
      .fill([])
      .map((x, i) => ++i);
      this.pages = this.totalPages.slice(0,5);
  }

  navigateToPage(pageNo: number) {
    this.currentPage = pageNo;
    let $event = {
      event: event,
      pageNo: pageNo,
      data: null
    };
    this.getPageItems($event);
    this.getNextPagesArrayToDisplay();
  }

  getPageItems($event: any) {
    let thisPageData: any = null;    
    if(this.data != null){
      thisPageData = this.getCurrentPageData();
    }
    $event.data = thisPageData
    this.getPageData.emit($event);
  }

  getCurrentPageData(){
    //return new data data is already available
    let start = ((this.currentPage -1 )* this.pageSize) +1;
    let end = start + this.pageSize;
    return this.data.slice(start,end);
  }
  getNextPagesArrayToDisplay(){
    let startIndex = this.currentPage-3 >=0?this.currentPage-3:0;
    let endIndex = this.currentPage+2 < 5? 5 :this.currentPage+2;
    if(endIndex > this.totalPages.length){
      endIndex = this.totalPages.length;
      startIndex = this.totalPages.length-5 <0?0:this.totalPages.length-5;
    }
    this.pages = this.totalPages.slice(startIndex,endIndex);
  }

  changePageSize(){
    this.calculatePageNumbers();
    this.currentPage = 1;
    //might need some other processing later
  }

  nextPage(){
    this.navigateToPage(this.currentPage+1);
  }

  previousPage(){
    this.navigateToPage(this.currentPage-1);
  }

 
}

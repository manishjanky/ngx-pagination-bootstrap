import { SimpleChanges } from '@angular/core';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PaginationComponent } from "./ngx-pagination-bootstrap.component";
import { FormsModule } from "@angular/forms";

describe("PaginationComponent", () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [PaginationComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should calculate total page numbers", () => {
    component.itemsCount = 35;
    component.pageSize = 10;
    component.calculatePageNumbers();
    expect(component.totalPages).toEqual([1, 2, 3, 4]);
  });

  it("should navigate to page", () => {
    component.pageSize = 10;
    const pageNo = 2;
    component.navigateToPage(pageNo);
    expect(component.currentPage).toEqual(2);
  });

  it("should get current page items", () => {
    component.pageSize = 10;
    const pageNo = 2;
    const $event = {
      event,
      pageNo,
      pageSize: 10,
      data: null
    };
    component.getPageItems($event);
    expect($event.data).toEqual(null);
  });

  it("should get current page items when data not null", () => {
    component.pageSize = 10;
    component.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 65];
    component.currentPage = 2;
    const pageNo = 2;
    const $event = {
      event,
      pageNo,
      pageSize: 10,
      data: null
    };
    component.getPageItems($event);
    expect($event.data).toEqual([1, 2, 3, 4, 65]);
  });

  it("should get current page data from function", () => {
    component.pageSize = 10;
    component.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 65];
    component.currentPage = 2;
    expect(component.getCurrentPageData()).toEqual([1, 2, 3, 4, 65]);
  });

  it("should get next array of pages to display", () => {
    component.itemsCount = 125;
    component.pageSize = 10;
    component.currentPage = 5;
    component.calculatePageNumbers();
    component.getNextPagesArrayToDisplay();
    expect(component.pages).toEqual([3, 4, 5, 6, 7]);
  });

  it("should get next array of pages to display", () => {
    component.itemsCount = 66;
    component.pageSize = 10;
    component.currentPage = 6;
    component.calculatePageNumbers();
    component.getNextPagesArrayToDisplay();
    expect(component.pages).toEqual([3, 4, 5, 6, 7]);
  });

  it("should update the no of page on page size change", () => {
    component.itemsCount = 125;
    component.pageSize = 20;
    component.currentPage = 5;
    component.totalPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    component.changePageSize();
    expect(component.totalPages).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should navigate to next page", () => {
    component.currentPage = 1;
    component.nextPage();
    expect(component.currentPage).toEqual(2);
  });

  it("should navigate to previous page", () => {
    component.currentPage = 5;
    component.previousPage();
    expect(component.currentPage).toEqual(4);
  });

  it("should calculate current pages items range index", () => {
    component.pageSize = 10;
    component.currentPage = 5;
    component.itemsCount = 125;
    this.pages = [3, 4, 5, 6, 7];
    component.calculateCurrentItemsRange();
    expect(component.itemsRange.from).toEqual(41);
    expect(component.itemsRange.to).toEqual(50);
  });

  it("should calculate current pages items range index when itemscount is 0", () => {
    component.pageSize = 10;
    component.currentPage = 1;
    component.itemsCount = 0;
    this.pages = [3, 4, 5, 6, 7];
    component.calculateCurrentItemsRange();
    expect(component.itemsRange.from).toEqual(0);
    expect(component.itemsRange.to).toEqual(0);
  });

  it("should calculate current pages items range index", () => {
    component.pageSize = 10;
    component.itemsCount = 125;
    component.currentPage = 7;
    component.pages = [3, 4, 5, 6, 7];
    component.calculateCurrentItemsRange();
    expect(component.itemsRange.to).toEqual(125);
  });

  it("should set the items count based on data length", () => {
    component.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    component.ngOnInit();
    expect(component.itemsCount).toEqual(13);
  });

  it("should recalculate things if data source changes", (done) => {
    component.pageSize = 10;
    component.itemsCount = 125;
    component.currentPage = 7;
    component.pages = [3, 4, 5, 6, 7];
    setTimeout(() => {
      component.itemsCount = 50;
      component.ngOnChanges({});
      expect(component.currentPage).toEqual(1);
      expect(component.totalPages).toEqual([1, 2, 3, 4, 5]);
      done();
    }, 2000);

  });

  // it("should recalculate things if data source changes", () => {
  //   component.pageSize = 10;
  //   component.itemsCount = 125;
  //   component.currentPage = 7;
  //   component.pages = [3, 4, 5, 6, 7];
  //   component.itemsCount = 50;
  //   const chang = new SimpleChange(125,50,true);
  //   component.ngOnChanges([chang]);
  //   expect(component.currentPage).toEqual(1);
  //   expect(component.totalPages).toEqual([1, 2, 3, 4, 5]);

  // });
});

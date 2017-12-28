# ngx-pagination-bootstrap

`ngx-pagination-bootstrap` is Bootstrap(4) based pagination module for angulat(2+) applications

## Examples

* [demo-page](https://manishjanky.github.io)
* [example-repo](https://manishjanky.github.io)

## Installation

* `npm install ngx-pagination-bootstrap`
* include bootstrap scripts and styles in you `angular-cli.json`

### For webpack and tsc builds/ angular-cli builds

* import `PaginationModule` from `ngx-pagination-bootstrap`:

```
import { PaginationModule } from 'ngx-pagination-bootstrap'
```

* add `PaginationModule` to the imports of your NgModule:

```
@NgModule({
  imports: [
    ...,

    PaginationModule
  ],
  ...
})
class YourModule { ... }
```

* use `<ng-pagination></ng-pagination>` in your templates to add pagination in your view like below

```
<ng-pagination [position]="'left'" [pageSize]="10" [itemsCount]="data.length" [data]="data" (getPageData)="getPageData($event)"></ng-pagination>
```

* do not forget to include bootstrap css in your buildproess, module or index.html!

## Config

### Input

* `pageSize: number` - Size of a page i.e number of items to be displayed in one page.
* `itemsCount: number` - total no of itmes that needs ro be paged/total no of records.
* `position: string` - position of the pagination respect to parent contrainer of your pagination component.
* `data: any` - Optional | the data needs to be paged default is null. If pagination is handled by api no need of data.

### Output

* `getPageData: EventEmitter` - emmited when user navigates to a page. Caputure this and update you view data. The events contains the following info

```
{
      event: event,
      pageNo: pageNo,
      data: null,
}
```
- *event*: the triggered event
- *pageNo*: current page number
- *data*: data is the array of records that belongs to this page. Will be `null` if data was not passed and you can fetch data from you api or the way you want it to handle

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-pagination-bootstrap/issues) here on GitHub.

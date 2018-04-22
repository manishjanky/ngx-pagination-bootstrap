# ngx-pagination-bootstrap

[![GitHub license](https://img.shields.io/github/license/manishjanky/ngx-pagination-bootstrap.svg)](https://github.com/me-and/mdf/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ngx-pagination-bootstrap.svg)]()
[![Build Status](https://travis-ci.org/manishjanky/ngx-pagination-bootstrap.svg?branch=master)](https://travis-ci.org/manishjanky/ngx-pagination-bootstrap)
[![Codecov branch](https://codecov.io/gh/manishjanky/ngx-pagination-bootstrap/branch/master/graphs/badge.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-pagination-bootstrap.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/manishjanky/ngx-pagination-bootstrap.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manishjanky/ngx-pagination-bootstrap.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/manishjanky/ngx-pagination-bootstrap.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/manishjanky/ngx-pagination-bootstrap.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/manishjanky/ngx-pagination-bootstrap.svg)]()

`ngx-pagination-bootstrap` is Bootstrap(4) based pagination module for Angular(2+) applications.

## Examples

* [demo-page](https://manishjanky.github.io/ngx-pagination-bootstrap-demo/)

## Installation

* `npm install ngx-pagination-bootstrap`
* `npm install bootstrap@4.0.0 --save-dev`
* include bootstrap scripts and styles in you `angular-cli.json` to be build of your build process.
* or include bootstrap css in your index.html 

`````
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
`````
* Right now `bootstrap@4.0.0-alpha.6` is supported till `v1.5.0`.
* Bootstrap `v4.0.0` supported from `v1.6.0` onwards.

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

* do not forget to include bootstrap css in your build process, module or index.html!

## Config

### Input

* `pageSize: number` - Size of a page i.e number of items to be displayed in one page.
* `itemsCount: number` - total no of itmes that needs ro be paged/total no of records.
* `position: string` - position of the pagination respect to parent contrainer of your pagination component.
* `data: Array` - Optional | the data needs to be paged default is null. If pagination is handled by api no need of data.

### Output

* `getPageData: EventEmitter` - emmited when user navigates to a page. Caputure this and update you view data. The events contains the following info

```
{
    event: event: Event,
    pageNo: pageNo: number,
    pageSize:pageSize: number,
    data: null| Array,
}
```
- **event**: the triggered event
- **pageNo**: current page number
- **pageSize**: current page size. No of items per page
- **data**: data is the array of records that belongs to this page. Will be `null` if data was not passed and you can fetch data from your api or the way you want it to handle

## Changelog
* v1.4.1
````
 Added support for Observable Data Source.
 Current items range display bug when itemcount 0 bug fix .
````
* v1.5.0
````
Angular 4.0.0 support added
Minor bug fixes
````
* v1.6.0
````
Bootstrap 4.0.0 supported
Range of items hidden on small devices
````
## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-pagination-bootstrap/issues) here on GitHub.

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

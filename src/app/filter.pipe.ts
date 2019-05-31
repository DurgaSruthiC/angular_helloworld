import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //searchText is a string which is given as search input by users
  transform(items: any[], searchText: string): any[] {
    //if there are no items specified returns null
    if (!items) {
      return [];
    }
    //if there is no item related to searchtext then it returns null
    if (!searchText) {
      return items;
    }
    //if input is specified in upper convertn it to lower
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
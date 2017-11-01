import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    lists: any = [
        {
            listTitle: "A",
            Items: [
                {
                    item: "Apple",
                },
                {
                    item: "Amber",
                },
                {
                    item: "Antelope",
                }
            ]
        },
        {
            listTitle: "B",
            Items: [
                {
                    item: "Boy",
                },
                {
                    item: "Bully",
                },
                {
                    item: "Beer",
                }
            ]
        },
        {
            listTitle: "C",
            Items: [
                {
                    item: "Car",
                },
                {
                    item: "Cat",
                },
                {
                    item: "Child",
                }
            ]
        }
    ];


    constructor() {
        console.log('Hello DataProvider Provider');
    }

}

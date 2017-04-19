import { Component } from '@angular/core';
import {CityService} from './city.service'
import { Router } from '@angular/router';

@Component({
    selector:"items",
    templateUrl: "./city.pagination.html"
})
export class CityPaginationComponent{


    cityService;
    router;
    search;

    cities = [];    
    flag = false;


    //* CONSTURCOR */
    constructor(itemService: CityService, router: Router){
        this.cities = itemService.getCities();
        this.cityService = itemService;
        this.router = router;
    }
    
    public show(item){
        this.flag=!this.flag;
    }

    public more(item){
        this.router.navigate(['/city', item._id]); //pass item ID here
    }
    
    
}
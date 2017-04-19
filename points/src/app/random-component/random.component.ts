import { Component } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {RandomService} from './random.service'


@Component({
  selector: 'random',
  templateUrl: './random.html'
})
export class RandomComponent {

    randomService;

    constructor(randomService: RandomService){
        this.randomService = randomService;
        this.phrases = randomService.getPhrases();
    }


    ticket = {
        name:"",
    };

    tickets = [];

    selectedPriority = {
        name:"",
        range:[],
        priority:""
    };
    
    tempGenValue = 0;
    tempPhrase = "";

    phrases;

    ranges = [
                {
                    name:"L O W", bootstrap:"default", range:[1, 3, 5]
                },
                {
                    name:"M E D I U M", bootstrap:"default", range:[7, 10, 14]
                },
                {
                    name:"H I G H", bootstrap:"default", range:[15, 20, 22, , 30, 56]
                }
            ];


    priorityPicked(item){
            for(let i = 0; i<this.ranges.length; i++){
                this.ranges[i].bootstrap = "default";
                if(this.ranges[i].name === item.name){
                    this.ranges[i].bootstrap = "primary"
                }    
        }
        this.selectedPriority = item;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomValueFromArray(array){
        return array[this.getRandomInt(0, array.length-1)];
    }

    addTicket(){
        
        this.tempGenValue = this.getRandomValueFromArray(this.selectedPriority.range);

        let input ="";
        if(this.ticket.name===""){
            input = "<no ticket name>"
        }else{
            input = this.ticket.name;
        }

        let ticketTMP = {
            name: input,
            priority: this.selectedPriority.name,
            points: this.tempGenValue
        };
        
        
        this.tickets.push(ticketTMP);

        this.tempPhrase = this.getRandomValueFromArray(this.phrases);

        this.ticket.name = ""

    }



}

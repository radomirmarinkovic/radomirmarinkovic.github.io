import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class RandomService{


    phrases = [

        { text:"I love you"},
        { text:"I adore you"},
        { text:"My darling/My sweetheart"},
        { text:"You are very pretty"},
        { text:"You are very handsome"},
        { text:" Nice"},
        { text:"My angel"},
        { text:"My beautiful"},
        { text:"My dear"},
        { text:"My heart"},
        { text:" Babyy"},
        { text:"I am thinking about you"},
        { text:" Kiss me"},
        { text:" Cutie"},
        { text:" My little one"},
        { text:" How beautiful you are"},
        { text:" My treasure"},
        { text:"  Love at first sight"},
        { text:"  The love of one’s life"},
        { text:" Crazy in love"},
        { text:" I miss you"}

    ];
    
    
    getPhrases() {
        return this.phrases;
    }




}
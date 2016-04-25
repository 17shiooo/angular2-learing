/**
 * Created by sunjiaqi on 16-4-25.
 */
import {Component,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Topic} from './topic';
import {TopicService} from "./topic.service";

@Component({
    selector:'topic-list',
    styles:[`
        ul{list-style:none;width: 400px;overflow: hidden; color:darkgray;font-size: 18px;}
        li{padding:5px;border:2px solid #000;margin-bottom: 4px;}
        .title{color:#000;}
    `],
    template:`
         <ul>
             <li *ngFor="#topic of topics" (click)="gotoDetail(topic)">
                 <div class="title">{{topic.title}}</div>
                 <div>{{topic.content}}</div>
                 <div>{{topic.date}}&emsp;{{topic.author}}</div>
             </li>
         </ul>
    `
})

export class TopicComponent{
    topics:Topic[];
    constructor(private _topicService:TopicService,private _router:Router){
        this.topics=_topicService.getTopics();
    }
    gotoDetail(topic:Topic){
        var link = ['Detail',{id:topic.id}];
        this._router.navigate(link);
    }
}






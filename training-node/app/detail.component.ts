/**
 * Created by sunjiaqi on 16-4-25.
 */
import {Component,Input,OnInit, ViewChild} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Topic} from './topic';
import {TopicService} from './topic.service';
@Component({
    selector:'topic-detail',
    styles:[`
        section{width: 400px;border:2px solid #000;font-size: 16px;}
        .pad{padding:5px;border-bottom: 2px solid #000;}
        header{background: lightgray;}
        header>.title{font-size: 24px;}
        header>.time{text-align: right;}
        .container{margin-bottom: 2px;}
        .container>.author{color:darkred;font-size: 22px;}
        .ul1,li{margin:0;padding:0;list-style:none;}
        .ul1>li{margin-bottom: 2px;border-top: 2px solid #000;}
        .rside{float: right;}
        .inp{display: inline-block;border:0;width: 300px;height: 40px;text-indent: 10px;outline: none;}
        .btn{display: inline-block;width:60px;height:40px;margin-left:30px;border:2px solid #000;background: #fff;}
    `],
    template:`
        <section>
            <header class="pad">
                <div class="title">{{topic.title}}</div>
                <div class="time">{{topic.date}}</div>
            </header>
            <div class="pad container">
                <div class="author">{{topic.author}}</div>
                <div>{{topic.content}}</div>
            </div>
            
            <ul id="ul1" class="ul1">
                <li *ngFor="#review of reviews,#i=index" class="pad">
                    <div><span>匿名</span><span class="rside">#{{i+1}}</span></div>
                    <div>{{review}}</div>
                </li>
            </ul>
            <footer>
                <input #lastReview type="text" id="inp" class="inp">
                <button type="button" class="btn" (click)="add()">评论</button>
            </footer>
        </section>
`
})
export class Detail{
    @ViewChild('lastReview') inputA;
    topic:Topic;
    reviews:string[];
    //lastReview: string = '';
    constructor(private _topicService:TopicService,private _routeParams:RouteParams){
        let id = this._routeParams.get('id');
        this.topic = _topicService.getTopic(parseInt(id));
        this.reviews = this.topic.reviews || [];
    }
    add(){

        //console.log(this.inputA.nativeElement.value)
        this.reviews.push(this.inputA.nativeElement.value);
        this.inputA.nativeElement.value='';
    }
}



























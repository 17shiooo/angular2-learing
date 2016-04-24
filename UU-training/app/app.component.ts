/**
 * Created by Administrator on 2016/4/23.
 */
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Topic} from './topic';
import {TopicService} from './topic.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [TopicService]
})
@RouteConfig({})
export class AppComponent implements OnInit{
    topics: Topic[] = [];
    constructor(private _topicService: TopicService,private _router: Router) {
    }

    ngOnInit(){
        this._topicService.getTopics();
    }
}

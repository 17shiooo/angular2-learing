/**
 * Created by sunjiaqi on 16-4-25.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TopicComponent} from './topic.component';
import {Detail} from './detail.component';
import {TopicService} from "./topic.service";

@Component({
    selector: 'my-app',
    template:`
        <h2>{{title}}</h2>
        <router-outlet></router-outlet>
`,
    directives:[ROUTER_DIRECTIVES],
    providers:[TopicService]
})

@RouteConfig([
    {path:'/topic', name:'Topic',component:TopicComponent, useAsDefault:true},
    {path:'/detail/:id', name:'Detail', component:Detail}
])
export class AppComponent{
    public title = 'Demos';
}






















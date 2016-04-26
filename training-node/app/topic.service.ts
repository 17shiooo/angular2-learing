/**
 * Created by Administrator on 2016/4/23.
 */
import {Injectable} from 'angular2/core';
import {TOPICS} from './topic-data';

@Injectable()
export class TopicService{
    getTopics(){
        return TOPICS;
        // var xhr=new XMLHttpRequest();
        // xhr.onreadystatechange=function(){
        //     if(xhr.readyState==4){
        //         if((xhr.status>=200 && xhr.status<300) ||xhr.status==304){
        //             //alert(xhr.responseText);
        //             return xhr.responseText;
        //         }else{
        //             alert('请求没成功！')
        //         }
        //     }
        // }
        // xhr.open('get','./topic-data',true);
        // xhr.send(null);
    }
    getTopic(id){
        // let result
        // for (var i = 0; i < TOPICS.length; i++) {
        //     if (TOPICS[i].id === id) {
        //         result = TOPICS[i]
        //     }
        // }
        // return result
        return TOPICS.filter(topic => topic.id === id)[0];
    }
}

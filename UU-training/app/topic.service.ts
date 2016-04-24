/**
 * Created by Administrator on 2016/4/23.
 */
import {Injectable} from 'angular2/core';
import {TOPICS} from './topic-data';

@Injectable()
export class TopicService{
    getTopics(){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if((xhr.status>=200 && xhr.status<300) ||xhr.status==304){
                    //alert(xhr.responseText);
                    return xhr.responseText;
                }else{
                    alert('请求没成功！')
                }
            }
        }
        xhr.open('get','topic-data.ts',true);
        xhr.send(null);
    }
}

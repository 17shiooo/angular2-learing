/**
 * Created by sunjiaqi on 16-4-25.
 */

import 'angular2/bundles/angular2-polyfills';

import 'angular2/platform/browser';
import 'angular2/core';
import 'angular2/http';
import 'angular2/router';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);

"use strict";
var home_component_1 = require("../home/home.component");
var login_component_1 = require("../user/login.component");
var contact_component_1 = require("../contact/contact.component");
exports.AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'welcome',
        loadChildren: '../../../app/routes/welcome/welcome.module#WelcomeModule',
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'about',
        loadChildren: '../+about/about.module#AboutModule',
        data: {
            preload: true
        },
        canActivate: ['EnsureLoginGuard']
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'lcr',
        loadChildren: '../+loadChild/loadChild.module#LoadChildModule',
        data: {
            preload: false
        }
    }
];

'use strict';

angular.module('app', ['ngResource', 'ui.router','ngSanitize'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
           .state('home', {
                   url: '/home',
                   views: {
                       'content': {
                           templateUrl: 'home/home.html',
                           controller: 'HomeController'
                       }
                   }
               });

    }).run(function($rootScope,  $state) {



 });
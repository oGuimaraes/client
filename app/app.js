var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   $locationProvider.html5Mode(true); // remove o # da url

   $routeProvider

   .when('/list', {
      templateUrl : 'app/views/list.html',
      controller     : 'ListCtrl',
   })

   .when('/edit', {
      templateUrl : 'app/views/edit-list.html',
      controller  : 'EditCtrl',
   })

   .otherwise ({ redirectTo: '/' });
});
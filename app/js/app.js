/**
 * Created by Administrator on 2017/1/4.
 */
//创建入口程序，创建根模块，并配置模块依赖
var app= angular.module('myPhoneApp',['ngRoute',
'phoneControllers','phoneServices','phoneFilters']);

//配置路由
app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/phones',{
                templateUrl:"partials/phone-list.html",
                controller:"phoneListCtrl"
            })
            .when('/phones/:phoneBp', {
                templateUrl: "partials/phone-detail.html",
                controller: "phoneDetailCtrl"
            })
            .otherwise({
                redirectTo:"/phones"
        });
}]);
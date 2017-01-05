/**
 * Created by Administrator on 2017/1/4.
 */
//创建Phone服务，该服务利用$resource服务从服务器查询phone.json的数据
var serv=angular.module('phoneServices',['ngResource']);
serv.factory('Phone',['$resource',function($resource){
    //$resource(url,[paramDefaults],[actions],options);
    return $resource('data/:phoneId.json');
}]);
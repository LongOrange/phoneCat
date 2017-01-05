/**
 * Created by Administrator on 2017/1/4.
 */
//定义控制器模块, 该模块包含2个控制器，分别是phoneListCtrl & phoneDetailCtrl
var ctrls= angular.module('phoneControllers',[]);
//控制器phoneListCtrl，通过Phone服务，获取数据，并排序
ctrls.controller('phoneListCtrl',['$scope','Phone',function($scope,Phone){
    $scope.phones= Phone.query({phoneId:'phones'});
    $scope.orderProp= 'age';
    // console.log($scope.phones);
}]).controller('phoneDetailCtrl',['$scope','$routeParams','Phone',
    function($scope,$routeParams,Phone){
        console.log($routeParams);  //phone.id
        //根据路径参数，调用Phone对象的get方法，获取资源
        $scope.phone= Phone.get({
            phoneId:$routeParams.phoneBp //属性名来自Phone服务的url参数，属性值来资源app.js中定义的路由
        },function(data){
            $scope.mainImageUrl= data.images[0];
            console.log(data);
        },function(err){
            console.log(err);
        });
        $scope.setImage=function(imageUrl){
            $scope.mainImageUrl=imageUrl;
        }

        //console.log($scope.mainImageUrl);
     }
    /*function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({
            phoneId: $routeParams.phoneId
        }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }*/
]);

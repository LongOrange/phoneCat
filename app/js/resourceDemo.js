/**
 * Created by Administrator on 2017/1/5.
 */
'use strict';
(function(){
    var app=angular.module('myDemoApp',['ngResource']);
    app.factory('Phone',['$resource',function($resource){
        //固定参数
        return $resource('../data/phones.json');
    }]);
    app.controller('demoCtrl',['$scope','Phone',function($scope,Phone){
        $scope.phones= Phone.query();
        console.log($scope.phones);
    }])


    app.factory('Phone2',['$resource',function($resource){
        //动态参数
        return $resource('../data/:phoneId.json');
    }]);
    app.controller('demoCtrl2',['$scope','Phone2',function($scope,Phone2){
        $scope.phones= Phone2.query({'phoneId':'phones'});

    }]);

    app.factory('Phone3',['$resource',function($resource){
        //两个参数,默认一个参数
        return $resource('../:path/:phoneId.json',{path:'data'});
    }]);
    app.controller('demoCtrl3',['$scope','Phone3',function($scope,Phone3){
        $scope.phones=Phone3.get({'phoneId':'lg-axis'});
        console.log($scope.phones);
    }]);

    app.factory('Phone4',['$resource',function($resource){
        //两个参数，没有默认参数
        return $resource('../:path/:phoneId');
    }]);
    app.controller('demoCtrl4',['$scope','Phone4',function($scope,Phone4){
        $scope.phones=Phone4.get({'phoneId':'lg-axis.json','path':'data'},function(data){
            console.log(data);
        });
        console.log($scope.phones);
    }]);

    app.factory('Phone5',['$resource',function($resource){
        //三个参数，自定义方法
        return $resource('../:path/:phoneId.json',{'path':'data'},{
            getAll:{
                method:'GET',
                params:{
                    // phoneId:'nexus-s'
                },
                isArray:false
            }
        });
    }]);
    app.controller('demoCtrl5',['$scope','$q','Phone5',function($scope,$q,Phone5){
        // var defer=$q.defer();
        $scope.phones=Phone5.getAll({'phoneId':'lg-axis'},function(data){
            console.log(data);
            // defer.resolve(data);
        },function(err){
            // defer.reject(err);
        });
        // console.log(defer.promise);
        console.log($scope.phones);
    }])

})();
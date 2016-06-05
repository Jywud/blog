var app = angular.module('myApp',[], function(){
    console.log("angular start..");
});


//自定义指令
app.directive('runoobDirective', function(){
    return {
        replace: true,
        template: "<h2 class = 'text-center'>水果表单</h2>"
    }
});

//自定义服务
app.factory('showName',function(){  
    return "XIAOMING";
});


//自定义服务,只能是对象
app.service('showName2', function(){  
    this.name ="DINDING";
});


//自定义过滤器
app.filter('myFilter', function() {  
    return function(items){
        var a =[];
        $.each(items,function(index, item) {
            if(item.count >10){
                a.push(item);
            }
        });
        
        return a;
    };
});
app.controller('myCtrl', function($scope, showName, showName2){
    console.log(showName);
    console.log(showName2.name);
    $scope.items = [
        {id:"001",name:"苹果",count:10,price:32},
        {id:"002",name:"橘子",count:12,price:60},
        {id:"003",name:"香蕉",count:30,price:92},
        {id:"004",name:"火龙果",count:4,price:30}
    ];

    $scope.funCount = function(){
        var count = 0;
        $.each($scope.items,function(index, item) {
            count += parseInt(item.count || 0);
        });

        return count;
    };

    $scope.filCount = function(item){
        if(item.count>11){
            return true;
        }
        return false;
    };

    $scope.funPrice = function(){
        var price = 0;
        $.each($scope.items, function(index, el) {
            price += parseInt(el.count || 0) * parseInt(el.price)
        });
        return price;
    };

    $scope.minus = function(id){
        $.each($scope.items, function(index, el) {
            if(id == el.id){
                if(el.count >0){
                    el.count--;
                }else{
                    el.count = 0;
                }                
            }
        });        
    };

    $scope.add = function(id){
        $.each($scope.items, function(index, el) {
            if(id == el.id){                
                el.count++;                            
            }
        });
    };
});
(function(){
     var app = angular.module("myAppOnService");
    
    app.service("myService2",function(){
       
        this.appName="Second app on angularjs";
        this.madeBy="Your Name ";
        this.year="2017";
        

    });
})();

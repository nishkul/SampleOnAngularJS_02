(function(){
   var app = angular.module("myAppOnService");
    
    app.service('myService', function($http) {
        
        var self = this;
        self.getContact = function(){
        var promise1= $http.get('http://localhost:8082/contact');
            var promise2=  promise1.then(function(response){
                return response.data;
            });
            return promise2;
        }
        
        this.saveUser =function(userUpdatedData){
         return   $http.put("http://localhost:8082/contact/"+userUpdatedData.id,userUpdatedData).then(function(response){
             //nay operation if requird
               console.log("user upadeted data");
            });
        }
        this.createNewUser =function(newUserData){
         return   $http.post("http://localhost:8082/contact/",newUserData).then(function(response){
             //nay operation if requird
               console.log("user added data");
            });
        }
        
        //second way to fecth data
 /* var myService = {
    abc: function() { 
        
      // $http returns a promise, which has a then function, which also returns a promise
      return  $http.get('http://localhost:8082/contact').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
//      return promise;
    }
  };
  return myService;*/
});
    })();



































//app.service('myService', function ($http) { 
////    
////    return contanct = {
////        'getContact':getContact
////    };
////    

//////  $http({
//////  method: 'GET',
//////  //url: 'http://localhost:8088/contact'
//////  url: 'http://localhost:8087/contact',
//////}).then(function successCallback(response) {
//////    console.log(response.data);
//////    return this.userList=response.data;
//////    console.log("hui  "+ this.userList);  
//////  }.bind(this), function errorCallback(response) {
//////    // called asynchronously if an error occurs
//////    // or server returns response with an error status.
//////  }.bind(this));  
//////    
//////  return this.userList;
////    
////    
////    ///////////////////////////////////////////////////
////      var getContact =function(){
////            console.log("sssssssssss");
//////       var promise1 = $http.get('http://localhost:8087/contact');
//////    var promise2 =  promise1.then(function(response){
//////        return response.data;
//////        
//////    });
//////         console.log(promise2.data);
//////     return promise2; 
////    }
////    ////////////////////////////////////////////////////////////////////
////   /*$http.get('http://localhost:8087/contact').then(successCallback, errorCallback);
////
////function successCallback(response){
////    console.log(response.data);
////    this.userList=response.data;
////    //success code
////}.bind(this),
////function errorCallback(error){
////    //error code
////}*/
////
////
////}); 
//


   
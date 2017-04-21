(function(){
    
   var app = angular.module("myAppOnService");

//var ServiceCtrl = 
    app.controller("ServiceCtrl",setData);


//ServiceCtrl.$inject = ['$scope','myService'];

function setData($scope,myService,myService2){
    $scope.toggleEditFlag=false;
     $scope.addNewUserFlag=false;
//    myService.abc().then(function(d) {
//        console.log(d);
//    $scope.userList = d;console.log(d);
//  });
  myService.getContact().then(function(data){
     $scope.userList=data; 
  });
    //$scope.userList=myService.userList;
    $scope.appName =myService2.appName;
     $scope.year =myService2.year;
     $scope.madeBy =myService2.madeBy;
     $scope.singleUser=$scope.userList;
    
    $scope.updateUserData=function(index){
        $scope.singleUser=$scope.userList[index];
         $scope.successMessage="";
          $scope.toggleEditFlag=false;
         $scope.errorMessage="";//or used undefine 
    }
 $scope.toggleEdit=function(){
        $scope.toggleEditFlag=!$scope.toggleEditFlag;
    }
 
 $scope.save=function(){
      $scope.toggleEdit();
     if($scope.addNewUserFlag){
var newUser= $scope.singleUser;
     myService.createNewUser(newUser).then(function(response){
         $scope.successMessage="Your User is added successfully ";
     },function(){
          $scope.errorMessage="Your User is not added ";
     });
     }else{
              
var updateUser= $scope.singleUser;
     myService.saveUser(updateUser).then(function(response){
         $scope.successMessage="Your data is updated successfully ";
     },function(){
          $scope.errorMessage="Sorry some error occur for server ";
     });
     }
     
  
     
    }
 $scope.addnewUser=function(){
      $scope.addNewUserFlag =true
         $scope.toggleEditFlag =true;
     $scope.singleUser= {
         id:new Date().getMilliseconds()
     };
     
 }
};
   
  
    
})();
  

 
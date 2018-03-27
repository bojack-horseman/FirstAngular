var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/');
$stateProvider
.state('statetwo', {
        url: '/statetwo',
        views: {
                    '': { templateUrl: 'content-about.html' },
                    'columnOne@statetwo': {
                        templateUrl: 'table-content.html',
                        controller: 'userController'
                    },
                    'columnTwo@statetwo': {
                        templateUrl:'table-tax.html',
                        controller:'taxController'
                    }
                }
    })
    .state('stateone', {
            url: '/',
            templateUrl: 'stateone.html'
    });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
})
routerApp.controller('userController', function($scope) {

    $scope.message = 'test';

    $scope.users = [
        {
            name:'Rajesh',
            id: 1,
            dob:'25-12-76',
            age:41
        },
        {
            name:'Suresh',
            id: 2,
            dob:'25-10-75',
            age:42
        },
        {
            name:'Lokesh',
            id: 3,
            dob:'25-11-77',
            age:40
        }
    ];
});

routerApp.controller('taxController', ['$http', '$scope' ,function($http, $scope){
     $http.get('http://hotels.perspective.com.co/api/tax-n-promo/7148fc23-ec9d-480a-84ad-176ae1cd3d37/tax/?venue=44693013-5831-448d-9669-cf21544164a3', {
        headers: {
            "Authorization": 'Token d34ef2fb036e36e070d6a1e97d420843dee64bcc'
        }
      }).then(function(response){
          $scope.products = response.data.results;
      }, function(error){
          console.log(error,'error');
    });
    $scope.createFunc = function(){

    }
    $scope.updateFunc = function(){

    }
    $scope.deleteFunc = function(){
        data.variable
    }

}]);

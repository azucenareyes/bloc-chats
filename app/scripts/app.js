(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled:true,
        requireBase: false
      });
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl as main',
        templateUrl: '/templates/main.html'
      });
  }
  angular
  //'blocChats' is just the name, the array holds the dependencies
    .module('blocChats', ['ui.router', 'firebase'])
    .config(config);
})();

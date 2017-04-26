(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('CurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/newUserNameModal.html',
        controller: 'UserCtrl as user',
        size: 'sm',
        backdrop: 'static',
        keyboard: false,
      });
    }
  }

  angular
    .module('blocChats')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

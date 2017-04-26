(function () {
  function UserCtrl($uibModalInstance, $cookies) {
    this.text = '';
    this.submit = function () {
      $cookies.put('CurrentUser', this.text);
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChats')
    .controller('UserCtrl', ['$uibModalInstance','$cookies', UserCtrl]);
})();

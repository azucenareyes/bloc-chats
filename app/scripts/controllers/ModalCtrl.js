(function() {
  function ModalCtrl($uibModalInstance, Room) {
    //2 things this controller needs to do
    this.text = "";
    this.textNewName = "";

    this.submit = function() {
      $uibModalInstance.close(this.text);
    };
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChats')

    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
